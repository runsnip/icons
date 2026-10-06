/*
 * Every icon against the set's rules (system.ts):
 *   - its geometry inside the field, 3.5 to 20.5 (curves and arcs by their true extent, scripts/bounds.mjs);
 *   - exactly one emphatic motif — elements filled (currentColor) or thickened (stroke-width 2.6) count as one when
 *     they are the same shape repeated — except the glyphs system.ts lists;
 *   - the set's 24-unit viewBox, unless the icon is one of the drawings that declare their own (the brand marks).
 * The motif being the SMALL part is not checked: `npm run sheet` is for looking at that.
 *
 *   npm run audit            every icon       npm run audit -- bold copy     these
 */
import { readFileSync } from "node:fs";
import { elementBounds } from "./bounds.mjs";

const root = new URL("..", import.meta.url);
const pending = process.argv.find((a) => a.startsWith("--manifest="))?.slice(11);
/* --manifest=pending/<set>.json: icons being drawn, not yet in icons.json, checked or shown on their own. */
const manifest = pending ? JSON.parse(readFileSync(pending, "utf8")) : JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
const { FIELD, GLYPHS } = await import(new URL("system.ts", root).href);
const asked = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const list = asked.length ? manifest.filter((i) => asked.includes(i.file) || asked.includes(i.name)) : manifest;

let bad = 0;
for (const entry of list) {
  const icon = (await import(new URL(`icons/${entry.file}.ts`, root).href)).default;
  if (icon.svg?.viewBox) continue; /* a drawing on its own canvas (the wordmark, Google's, GitHub's): not a mark on this grid */
  const problems = [];
  const outside = [];
  for (const [tag, a] of icon.node) {
    const b = elementBounds(tag, a);
    if (!b) { problems.push(`${tag}: bounds unknown`); continue; }
    for (const [k, v] of Object.entries(b)) if (v < FIELD.min - 0.1 || v > FIELD.max + 0.1) outside.push(`${tag}.${k}=${+v.toFixed(2)}`);
  }
  if (outside.length) problems.push(`outside the field: ${outside.join(" ")}`);
  const heavy = new Set(icon.node
    .filter(([, a]) => a.fill === "currentColor" || Number(a["stroke-width"]) === 2.6)
    .map(([tag, a]) => tag + JSON.stringify(Object.fromEntries(Object.entries(a).filter(([k]) => !["x", "y", "cx", "cy", "d"].includes(k))))));
  if (heavy.size !== 1 && !GLYPHS[entry.name]) problems.push(`${heavy.size} motifs`);
  if (!entry.set) problems.push("no set in icons.json");
  if (problems.length) { bad++; console.log(`FAIL  ${entry.name.padEnd(26)} ${problems.join(" · ")}`); }
}
console.log(`\n${list.length} icons · ${list.length - bad} conform · ${bad} failed`);
process.exit(bad ? 1 : 0);
