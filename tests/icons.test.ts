import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as data from "../index";
import * as components from "../react/index";
import { DEFAULTS, iconNames, loadIcon, toSvg, type Icon } from "../index";

const root = new URL("../", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("icons.json", root), "utf8")) as { name: string; file: string; aliases: string[] }[];

/* Attributes compared as sets, element by element: the same drawing, whatever order they are written in. */
const parse = (markup: string) => [...markup.matchAll(/<([a-z]+)([^>]*)>/g)].map(([, tag, attrs]) =>
  tag + " " + [...attrs.matchAll(/([a-zA-Z:-]+)="([^"]*)"/g)].map((m) => m[1] + "=" + m[2]).sort().join(" "));

test("every icon in icons.json has its module, every module is listed, and index and dynamic name them all", async () => {
  const files = readdirSync(new URL("icons/", root)).map((f) => f.replace(/\.ts$/, "")).sort();
  assert.deepEqual(files, manifest.map((i) => i.file).sort());
  assert.deepEqual([...iconNames].sort(), files);
  for (const i of manifest) {
    const icon = (data as Record<string, unknown>)[i.name] as Icon;
    assert.equal(icon?.name, i.name, `${i.name} not exported by index`);
    for (const alias of i.aliases) assert.equal((data as Record<string, unknown>)[alias], icon, `${alias} is not ${i.name}`);
    assert.equal(await loadIcon(i.file), icon, `loadIcon("${i.file}")`);
    assert.equal(typeof (components as Record<string, unknown>)[i.name], "function", `${i.name} has no component`);
  }
  assert.equal(await loadIcon("no-such-icon"), null);
});

test("a component and toSvg draw the same <svg>, for every icon and option", () => {
  for (const i of manifest) {
    const icon = (data as Record<string, unknown>)[i.name] as Icon;
    const Component = (components as Record<string, unknown>)[i.name] as (p: object) => unknown;
    for (const [props, options] of [[{}, {}], [{ size: 16 }, { size: 16 }], [{ color: "red" }, { color: "red" }]] as const) {
      assert.deepEqual(parse(renderToStaticMarkup(h(Component as never, props))), parse(toSvg(icon, options)), `${i.name} ${JSON.stringify(props)}`);
    }
  }
});

test("the set's stance, and colour on a filled mark", () => {
  assert.deepEqual(DEFAULTS, { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" });
  assert.equal(toSvg(data.BoldIcon), '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.5h6a3.75 3.75 0 0 1 0 7.5H7ZM7 12h7a4 4 0 0 1 0 8H7Z" stroke-width="2.6"></path></svg>');
  assert.match(toSvg(data.IconGithub, { color: "#123" }), /fill="#123"/);
  assert.match(toSvg(data.BoldIcon, { color: "#123", attributes: { class: 'a"b', "aria-label": "Bold" } }), /stroke="#123".*class="a&quot;b" aria-label="Bold"/);
  assert.doesNotMatch(toSvg(data.RunSnipWordmark), /width=/);
});

test("the drawings are the ones recorded: a change to any icon changes this", async () => {
  const all = [];
  for (const i of manifest) { const icon = (await import(`../icons/${i.file}.ts`)).default as Icon; all.push([icon.name, icon.node, icon.svg ?? null]); }
  assert.equal(createHash("sha256").update(JSON.stringify(all)).digest("hex"), "7f48639da0d63eacb7b16ecd641659bef0a251058cc41f3b51e71910c73cdab2",
    "an icon's drawing changed: if meant, record the new hash here");
});

test("every icon keeps the set's rules: inside the field, one motif (scripts/audit.mjs)", async () => {
  const { execFileSync } = await import("node:child_process");
  const cwd = new URL("../", import.meta.url).pathname;
  const out = execFileSync(process.execPath, ["--experimental-strip-types", "--no-warnings", "--import", "./scripts/register.mjs", "scripts/audit.mjs"], { cwd, encoding: "utf8" });
  assert.match(out, / 0 failed/);
});
