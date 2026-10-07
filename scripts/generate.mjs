/*
 * The files made from icons/*.ts and icons.json — never edited by hand, checked by the tests to be up to date:
 *   index.ts           every icon's data by name (and its aliases), and the renderers
 *   dynamic.ts         every icon by its file name, loaded when asked for
 *   react/icons.ts     a component per icon (and per alias)
 *   browser/names.ts   every icon by the name a page writes in data-rs-icon: its file name, and its aliases'
 *   kinds.ts           the kinds of file and folder: each glyph's colour and the names it matches (icons.json's
 *                      `color`, `extensions`, `fileNames`, `folderNames`), as the tables files.ts looks names up in
 * Adding an icon: write icons/<name>.ts, add it to icons.json, run `npm run generate`.
 */
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(`${root}icons.json`, "utf8"));
const head = "/* Made by scripts/generate.mjs from icons/*.ts and icons.json. Do not edit; run `npm run generate`. */\n";

const index = [head,
  'export type { Icon, IconElement, IconNode, IconOptions } from "./types";',
  'export { DEFAULTS, createElement, svgAttributes, toSvg } from "./render";',
  'export { iconNames, loadIcon } from "./dynamic";',
  'export { FIELD, GLYPHS, SOLID, SOLID_STROKE } from "./system";',
  'export { RUNSNIP_APPS, ON_BRAND, type RunSnipApp } from "./brand";',
  'export { FILE_COLOR, FOLDER_COLOR, corner, fileKindOf, folderKindOf, iconForm, kindColor, paint, resolveIcon, transformElement, transformPath, type FormOptions, type IconForm, type IconRequest } from "./files";',
  "",
  ...manifest.map((i) => `export { ${[i.name, ...i.aliases.map((a) => `${i.name} as ${a}`)].join(", ")} } from "./icons/${i.file}";`),
  ""].join("\n");

const dynamic = [head,
  'import type { Icon } from "./types";',
  "",
  "/** Every icon by its file name (kebab-case: `bold`, `chevron-right`), loaded only when asked for. */",
  "export const iconImports: Record<string, () => Promise<Icon>> = {",
  ...manifest.map((i) => `  ${JSON.stringify(i.file)}: () => import("./icons/${i.file}").then((m) => m.default),`),
  "};",
  "",
  "/** The names `loadIcon` and `DynamicIcon` take. */",
  "export const iconNames = Object.keys(iconImports);",
  "",
  "/** An icon by its file name, loaded now: on a server before rendering, or in the browser when first shown. */",
  "export async function loadIcon(name: string): Promise<Icon | null> {",
  "  const load = iconImports[name];",
  "  return load ? load() : null;",
  "}",
  ""].join("\n");

const react = [head,
  'import { createIcon, type IconComponent } from "./create";',
  ...manifest.map((i) => `import ${i.name}Data from "../icons/${i.file}";`),
  "",
  ...manifest.flatMap((i) => [
    `export const ${i.name}: IconComponent = /* @__PURE__ */ createIcon(${i.name}Data);`,
    ...i.aliases.map((a) => `export const ${a}: IconComponent = ${i.name};`),
  ]),
  ""].join("\n");

/* A page names an icon as a file is named — bold, chevron-right — and an alias likewise: ChevronIcon is chevron. */
const kebab = (name) => name.replace(/Icon$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
const files = new Set(manifest.map((i) => i.file));
const browserNames = [head,
  'import type { Icon } from "../types";',
  ...manifest.map((i, n) => `import i${n} from "../icons/${i.file}";`),
  "",
  "/** Every icon by the name a page gives in data-rs-icon: its file name (bold, chevron-right), or an alias's. */",
  "export const icons: Record<string, Icon> = {",
  ...manifest.flatMap((i, n) => [
    `  ${JSON.stringify(i.file)}: i${n},`,
    ...[...new Set(i.aliases.map(kebab))].filter((a) => !files.has(a)).map((a) => `  ${JSON.stringify(a)}: i${n},`),
  ]),
  "};",
  ""].join("\n");

/* Every icon an entry of its own, so `@runsnip/icons/icons/<name>` is one small file and a dynamic import one chunk. */
const entries = { index: "index.ts", dynamic: "dynamic.ts", render: "render.ts", "react/index": "react/index.ts", "react/dynamic": "react/dynamic.tsx" };
for (const i of manifest) entries[`icons/${i.file}`] = `icons/${i.file}.ts`;

/*
 * The kinds of file and folder. A name is matched lowercased; a file name with * in it is a pattern (`dockerfile.*`,
 * `.env.*`), tried after the exact names and before the extensions. Two glyphs claiming one name is an error: one
 * name, one kind.
 */
const kinds = manifest.filter((i) => i.color || i.extensions || i.fileNames || i.folderNames);
const claims = { extension: new Map(), fileName: new Map(), pattern: new Map(), folderName: new Map() };
const clash = [];
const claim = (table, key, file) => {
  const k = key.toLowerCase();
  if (claims[table].has(k) && claims[table].get(k) !== file) clash.push(`${table} "${k}": ${claims[table].get(k)} and ${file}`);
  claims[table].set(k, file);
};
for (const i of kinds) {
  if (!/^#[0-9A-F]{6}$/.test(i.color ?? "")) clash.push(`${i.name}: color must be #RRGGBB (uppercase), not ${i.color}`);
  for (const e of i.extensions ?? []) claim("extension", e.replace(/^\./, ""), i.file);
  for (const n of i.fileNames ?? []) claim(n.includes("*") ? "pattern" : "fileName", n, i.file);
  for (const n of i.folderNames ?? []) claim("folderName", n, i.file);
}
if (clash.length) throw new Error(`kinds claim the same name:\n  ${clash.join("\n  ")}`);
const table = (map) => `{\n${[...map].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n")}\n}`;
const patternSource = (p) => "^" + p.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$";
const kindsModule = [head,
  "/** Each kind's colour, by its glyph's file name: what its coloured forms are drawn in. */",
  `export const KIND_COLORS: Record<string, string> = ${table(new Map(kinds.map((i) => [i.file, i.color])))};`,
  "",
  "/** A file's kind by its extension, without the dot: `ts`, and compound ones, `d.ts`. */",
  `export const BY_EXTENSION: Record<string, string> = ${table(claims.extension)};`,
  "",
  "/** A file's kind by its whole name: `package.json`, `dockerfile`. */",
  `export const BY_FILE_NAME: Record<string, string> = ${table(claims.fileName)};`,
  "",
  "/** A file's kind by a pattern on its whole name: `dockerfile.*`. */",
  `export const BY_FILE_PATTERN: [pattern: RegExp, kind: string][] = [\n${[...claims.pattern].map(([k, v]) => `  [/${patternSource(k)}/, ${JSON.stringify(v)}],`).join("\n")}\n];`,
  "",
  "/** A folder's kind by its name: `src`, `node_modules`. */",
  `export const BY_FOLDER_NAME: Record<string, string> = ${table(claims.folderName)};`,
  ""].join("\n");

writeFileSync(`${root}kinds.ts`, kindsModule);
writeFileSync(`${root}index.ts`, index);
writeFileSync(`${root}scripts/entries.json`, JSON.stringify(entries, null, 2) + "\n");
writeFileSync(`${root}dynamic.ts`, dynamic);
writeFileSync(`${root}react/icons.ts`, react);
writeFileSync(`${root}browser/names.ts`, browserNames);
console.log(`${manifest.length} icons (${kinds.length} kinds of file), ${manifest.reduce((n, i) => n + i.aliases.length, 0)} aliases`);
