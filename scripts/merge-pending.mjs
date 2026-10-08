/* Icons drawn in pending/<set>.json, taken into icons.json (their meaning kept as `description`); the lists then
   go. Run `npm run generate` after. An entry `{ "extends": "ImageIcon", color, extensions… }` draws nothing: it makes
   an icon already in the set the glyph of a kind of file, its fields added to that icon's. */
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
const have = new Set(manifest.flatMap((i) => [i.name, ...(i.aliases ?? [])]));
for (const file of readdirSync(new URL("pending/", root)).filter((f) => f.endsWith(".json")).sort()) {
  const list = JSON.parse(readFileSync(new URL(`pending/${file}`, root), "utf8"));
  for (const { meaning, ...entry } of list) {
    if (entry.extends) {
      const { extends: name, ...fields } = entry;
      const target = manifest.find((i) => i.name === name);
      if (!target) throw new Error(`${file}: ${name} is not in icons.json`);
      for (const [key, value] of Object.entries(fields)) {
        if (Array.isArray(value)) target[key] = [...new Set([...(target[key] ?? []), ...value])];
        else if (target[key] !== undefined && target[key] !== value) throw new Error(`${file}: ${name}.${key} is already ${target[key]}`);
        else target[key] = value;
      }
      continue;
    }
    if (have.has(entry.name)) throw new Error(`${entry.name} is already in icons.json`);
    manifest.push({ ...entry, description: meaning });
    have.add(entry.name);
  }
  rmSync(new URL(`pending/${file}`, root));
}
writeFileSync(new URL("icons.json", root), JSON.stringify(manifest, null, 1) + "\n");
console.log(`${manifest.length} icons in icons.json`);
