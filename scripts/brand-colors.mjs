/*
 * The coloured brand marks, made from the plain ones and brand.ts: the frame filled with the app's colour, the
 * drawing inside it in white. Made, never drawn by hand, so a coloured mark is always its plain mark's drawing.
 * Run by `npm run generate`; the tests run it again and compare.
 */
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const { RUNSNIP_APPS, ON_BRAND } = await import(new URL("brand.ts", root).href);
const manifest = JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
const byName = new Map(manifest.map((i) => [i.name, i]));

export async function colourModule(app) {
  const { mark, color, name } = RUNSNIP_APPS[app];
  const plain = (await import(new URL(`icons/${byName.get(mark)?.file ?? mark}.ts`, root).href)).default;
  const [frame, ...inside] = plain.node;
  const node = [
    [frame[0], { ...frame[1], fill: color, stroke: color }],
    ...inside.map(([tag, a]) => [tag, a.fill === "currentColor" ? { ...a, fill: ON_BRAND } : { ...a, stroke: ON_BRAND }]),
  ];
  const colourName = mark.replace(/Icon$/, "ColorIcon");
  return {
    name: colourName,
    file: `${byName.get(mark).file}-color`,
    source: `/* Made by scripts/brand-colors.mjs from ${mark} and brand.ts. Do not edit; run \`npm run generate\`. */
import type { Icon } from "../types";

/** RunSnip ${name}'s mark in its own colour. From the brand set. */
export const ${colourName}: Icon = {
  name: ${JSON.stringify(colourName)},
  node: ${JSON.stringify(node)},
};

export default ${colourName};
`,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  for (const app of Object.keys(RUNSNIP_APPS)) {
    const made = await colourModule(app);
    writeFileSync(new URL(`icons/${made.file}.ts`, root), made.source);
  }
  console.log(`${Object.keys(RUNSNIP_APPS).length} coloured marks`);
}
