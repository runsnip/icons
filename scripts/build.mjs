/* Builds dist/: an ES module per export, code shared between them split into chunks, minified and
   without source maps; declarations from tsc. @runsnip/* and npm dependencies stay imports. */
import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const entries = JSON.parse(readFileSync(join(root, "scripts/entries.json"), "utf8"));
rmSync(join(root, "dist"), { recursive: true, force: true });
await build({
  absWorkingDir: root,
  entryPoints: Object.entries(entries).map(([out, src]) => ({ out, in: src })),
  outdir: "dist",
  bundle: true,
  splitting: true,
  format: "esm",
  platform: "neutral",
  target: "es2022",
  minify: true,
  legalComments: "none",
  external: ["@runsnip/*", "node:*", ...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {}).flatMap((name) => [name, `${name}/*`])],
  jsx: "automatic",
  logLevel: "warning",
});
/* One file for a page that loads a script rather than a module (a CDN, a plain page): every icon, the drawing of
   data-rs-icon elements, and window.RunSnipLoad / window.RunSnipIcons. */
await build({
  absWorkingDir: root,
  entryPoints: ["browser/index.ts"],
  outfile: "dist/browser/icons.min.js",
  bundle: true,
  format: "iife",
  platform: "browser",
  target: "es2018",
  minify: true,
  legalComments: "none",
  banner: { js: `/*! ${pkg.name} ${pkg.version} | MIT | the brand set's marks are RunSnip's trademarks */` },
  logLevel: "warning",
});
execFileSync("npx", ["tsc", "-p", "tsconfig.build.json"], { stdio: "inherit", cwd: root });

/* Declarations name their neighbours as the source does, without an extension: fine for a bundler,
   an error under Node's own ESM resolution (moduleResolution node16/nodenext). Each relative
   specifier gets the file it means: ./x.js, or ./x/index.js for a directory. */
const declarations = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? declarations(path) : name.endsWith(".d.ts") ? [path] : [];
});
for (const file of declarations(join(root, "dist"))) {
  const text = readFileSync(file, "utf8");
  const next = text.replace(/((?:from|import)\s*\(?\s*["'])(\.\.?\/[^"']*?)(["'])/g, (whole, head, spec, tail) => {
    if (/\.(js|mjs|cjs|json)$/.test(spec)) return whole;
    const base = join(dirname(file), spec);
    if (existsSync(`${base}.d.ts`)) return `${head}${spec}.js${tail}`;
    if (existsSync(join(base, "index.d.ts"))) return `${head}${spec}/index.js${tail}`;
    return whole;
  });
  if (next !== text) writeFileSync(file, next);
}
