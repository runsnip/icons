/*
 * Every icon (or those named, or one set) at 40, 24 and 15 px, on a light and a dark ground: the look the audit
 * cannot take — that the motif is the small part, that a mark still reads at 15 px, that a new icon sits with the
 * rest. Written to .sheet/<name>.html and, where a Chromium is found (Playwright's), .sheet/<name>.png.
 *
 *   npm run sheet                      every icon
 *   npm run sheet -- --set=sheets      one set (icons.json's "set")
 *   npm run sheet -- bold italic       these
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const pending = process.argv.find((a) => a.startsWith("--manifest="))?.slice(11);
/* --manifest=pending/<set>.json: icons being drawn, not yet in icons.json, checked or shown on their own. */
const manifest = pending ? JSON.parse(readFileSync(pending, "utf8")) : JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
const { toSvg } = await import(new URL("render.ts", root).href);
const args = process.argv.slice(2);
const set = args.find((a) => a.startsWith("--set="))?.slice(6);
const names = args.filter((a) => !a.startsWith("--"));
const list = manifest.filter((i) => (set ? i.set === set : true) && (names.length ? names.includes(i.file) || names.includes(i.name) : true));
const label = set ?? (pending ? pending.replace(/^.*\//, "").replace(/\.json$/, "") : names.length ? "chosen" : "all");

const cell = async (entry) => {
  const icon = (await import(new URL(`icons/${entry.file}.ts`, root).href)).default;
  const marks = [40, 24, 15].map((size) => toSvg(icon, { size })).join("");
  return `<div class="c"><div class="m">${marks}</div><div class="n">${entry.name.replace(/Icon$/, "")}</div></div>`;
};
const cells = (await Promise.all(list.map(cell))).join("");
const html = `<!doctype html><meta charset="utf-8"><style>
body{margin:0;font:11px ui-monospace,monospace}
.g{display:grid;grid-template-columns:repeat(8,150px);gap:6px;padding:10px}
.light{background:#fff;color:#1f2328}.dark{background:#17191c;color:#e6e8eb}
.c{padding:6px 4px;border-radius:6px}.m{display:flex;align-items:center;gap:8px;height:42px}.n{opacity:.7;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
h2{font:600 13px system-ui;margin:0;padding:10px 10px 0}
</style><h2 class="light">${label} · ${list.length} icons</h2><div class="g light">${cells}</div><div class="g dark">${cells}</div>`;

mkdirSync(new URL(".sheet/", root), { recursive: true });
const htmlPath = new URL(`.sheet/${label}.html`, root).pathname;
writeFileSync(htmlPath, html);

const cache = join(homedir(), "Library/Caches/ms-playwright");
const shell = existsSync(cache) ? readdirSync(cache).filter((n) => n.startsWith("chromium_headless_shell-")).sort().pop() : null;
const bin = shell && join(cache, shell, "chrome-headless-shell-mac-arm64", "chrome-headless-shell");
if (bin && existsSync(bin)) {
  const rows = Math.ceil(list.length / 8);
  const height = 40 + rows * 2 * 74 + 40;
  const png = new URL(`.sheet/${label}.png`, root).pathname;
  execFileSync(bin, ["--headless", "--no-sandbox", "--hide-scrollbars", `--window-size=1260,${height}`, `--screenshot=${png}`, `file://${htmlPath}`], { stdio: "ignore" });
  console.log(png);
} else console.log(htmlPath);
