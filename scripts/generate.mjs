/*
 * The files made from icons/*.ts and icons.json — never edited by hand, checked by the tests to be up to date:
 *   index.ts           every icon's data by name (and its aliases), and the renderers
 *   dynamic.ts         every icon by its file name, loaded when asked for
 *   react/icons.ts     a component per icon (and per alias)
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

/* Every icon an entry of its own, so `@runsnip/icons/icons/<name>` is one small file and a dynamic import one chunk. */
const entries = { index: "index.ts", dynamic: "dynamic.ts", render: "render.ts", "react/index": "react/index.ts", "react/dynamic": "react/dynamic.tsx" };
for (const i of manifest) entries[`icons/${i.file}`] = `icons/${i.file}.ts`;

writeFileSync(`${root}index.ts`, index);
writeFileSync(`${root}scripts/entries.json`, JSON.stringify(entries, null, 2) + "\n");
writeFileSync(`${root}dynamic.ts`, dynamic);
writeFileSync(`${root}react/icons.ts`, react);
console.log(`${manifest.length} icons, ${manifest.reduce((n, i) => n + i.aliases.length, 0)} aliases`);
