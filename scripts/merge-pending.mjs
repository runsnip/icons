/* Icons drawn in pending/<set>.json, taken into icons.json (their meaning kept as `description`); the lists then
   go. Run `npm run generate` after. */
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
const have = new Set(manifest.map((i) => i.name));
for (const file of readdirSync(new URL("pending/", root)).filter((f) => f.endsWith(".json")).sort()) {
  const list = JSON.parse(readFileSync(new URL(`pending/${file}`, root), "utf8"));
  for (const { meaning, ...entry } of list) {
    if (have.has(entry.name)) throw new Error(`${entry.name} is already in icons.json`);
    manifest.push({ ...entry, description: meaning });
    have.add(entry.name);
  }
  rmSync(new URL(`pending/${file}`, root));
}
writeFileSync(new URL("icons.json", root), JSON.stringify(manifest, null, 1) + "\n");
console.log(`${manifest.length} icons in icons.json`);
