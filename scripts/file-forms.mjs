/*
 * Every kind of file in every form, as icons of their own — so a page imports ReactFileIcon or ReactFolderColorIcon
 * and draws it, with no prop to choose the form:
 *
 *   <kind>-color               the glyph, in the kind's own colour            ReactColorIcon
 *   <kind>-file(-color)        a page, the glyph in its bottom-right corner   ReactFileIcon, ReactFileColorIcon
 *   <kind>-folder(-color)      a folder, likewise                             ReactFolderIcon, ReactFolderColorIcon
 *   <kind>-folder-open(-color) the folder open                                ReactFolderOpenIcon, …
 *
 * Made from the glyph by files.ts's iconForm, never drawn apart, so the forms of a kind cannot drift from it. The
 * coloured ones carry the kind's colour in every element: a colour given when drawing them changes nothing. Listed in
 * forms.json (icons.json stays the drawings); run by `npm run generate`, and the tests run it again and compare.
 */
import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const { iconForm } = await import(new URL("files.ts", root).href);

/** The forms, each as [file suffix, name suffix, options]. */
export const FORMS = [
  ["-color", "Color", { form: "glyph", colored: true }],
  ["-file", "File", { form: "file" }],
  ["-file-color", "FileColor", { form: "file", colored: true }],
  ["-folder", "Folder", { form: "folder" }],
  ["-folder-color", "FolderColor", { form: "folder", colored: true }],
  ["-folder-open", "FolderOpen", { form: "folder", open: true }],
  ["-folder-open-color", "FolderOpenColor", { form: "folder", open: true, colored: true }],
];

const head = "/* Made by scripts/file-forms.mjs from the kind's glyph. Do not edit; run `npm run generate`. */\n";

/** Every form of every kind: its manifest entry and its module's source. */
export async function forms() {
  const manifest = JSON.parse(readFileSync(new URL("icons.json", root), "utf8"));
  const names = new Set(manifest.flatMap((i) => [i.name, ...i.aliases]));
  const files = new Set(manifest.map((i) => i.file));
  const out = [];
  const clash = [];
  for (const kind of manifest.filter((i) => i.color && !i.colorOf)) {
    const glyph = (await import(new URL(`icons/${kind.file}.ts`, root).href)).default;
    const base = kind.name.replace(/Icon$/, "");
    for (const [fileSuffix, nameSuffix, options] of FORMS) {
      const name = `${base}${nameSuffix}Icon`;
      const file = `${kind.file}${fileSuffix}`;
      /* A kind with a coloured mark of its own (the brand set's) keeps it: its glyph in colour is that mark. */
      if (nameSuffix === "Color" && names.has(name)) continue;
      if (names.has(name) || files.has(file)) { clash.push(`${name} (${file}) is an icon of the set already`); continue; }
      const icon = iconForm(glyph, { ...options, color: kind.color });
      const what = { glyph: "glyph", file: "a page carrying its glyph", folder: options.open ? "an open folder carrying its glyph" : "a folder carrying its glyph" }[options.form];
      const source = `${head}import type { Icon } from "../types";

/** ${kind.description ?? kind.name.replace(/Icon$/, "")}: ${what}${options.colored ? ` in its colour, ${kind.color}` : ", in the text's colour"}. */
export const ${name}: Icon = {
  name: ${JSON.stringify(name)},
  node: ${JSON.stringify(icon.node)},
};

export default ${name};
`;
      out.push({ entry: { name, file, set: "forms", aliases: [], formOf: kind.name, form: options.form, ...(options.open ? { open: true } : {}), ...(options.colored ? { colored: true } : {}) }, source });
    }
  }
  if (clash.length) throw new Error(`forms clash with the set:\n  ${clash.join("\n  ")}`);
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const made = await forms();
  const before = existsSync(new URL("forms.json", root)) ? JSON.parse(readFileSync(new URL("forms.json", root), "utf8")) : [];
  const now = new Set(made.map((m) => m.entry.file));
  /* A kind gone takes its forms with it. */
  for (const old of before) if (!now.has(old.file) && existsSync(new URL(`icons/${old.file}.ts`, root))) unlinkSync(new URL(`icons/${old.file}.ts`, root));
  for (const { entry, source } of made) writeFileSync(new URL(`icons/${entry.file}.ts`, root), source);
  writeFileSync(new URL("forms.json", root), JSON.stringify(made.map((m) => m.entry), null, 1) + "\n");
  console.log(`${made.length} forms of ${new Set(made.map((m) => m.entry.formOf)).size} kinds`);
}
