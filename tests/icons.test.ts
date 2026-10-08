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
/* The forms of the kinds (scripts/file-forms.mjs): modules of the package like the drawings. */
const forms = JSON.parse(readFileSync(new URL("forms.json", root), "utf8")) as { name: string; file: string; aliases: string[] }[];

/* Attributes compared as sets, element by element: the same drawing, whatever order they are written in. */
const parse = (markup: string) => [...markup.matchAll(/<([a-z]+)([^>]*)>/g)].map(([, tag, attrs]) =>
  tag + " " + [...attrs.matchAll(/([a-zA-Z:-]+)="([^"]*)"/g)].map((m) => m[1] + "=" + m[2]).sort().join(" "));

test("every icon in icons.json has its module, every module is listed, and index and dynamic name them all", async () => {
  const files = readdirSync(new URL("icons/", root)).map((f) => f.replace(/\.ts$/, "")).sort();
  assert.deepEqual(files, [...manifest, ...forms].map((i) => i.file).sort());
  assert.deepEqual([...iconNames].sort(), files);
  for (const i of [...manifest, ...forms]) {
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
  /* No other company's logo: a brand is its owner's to draw (see README). */
  assert.equal((data as Record<string, unknown>).IconGoogle, undefined);
  assert.equal((data as Record<string, unknown>).IconGithub, undefined);
  assert.deepEqual(DEFAULTS, { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" });
  assert.equal(toSvg(data.BoldIcon), '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.5h6a3.75 3.75 0 0 1 0 7.5H7ZM7 12h7a4 4 0 0 1 0 8H7Z" stroke-width="2.6"></path></svg>');
  assert.match(toSvg(data.RunSnipWordmark, { color: "#123" }), /fill="#123"/);
  assert.match(toSvg(data.BoldIcon, { color: "#123", attributes: { class: 'a"b', "aria-label": "Bold" } }), /stroke="#123".*class="a&quot;b" aria-label="Bold"/);
  assert.doesNotMatch(toSvg(data.RunSnipWordmark), /width=/);
  /* A logo wider than tall: size is its height, and the width keeps its shape — in React (a Next.js Server Component)
     as in a string. */
  assert.match(toSvg(data.RunSnipWordmark, { size: 32 }), / width="160.86" height="32"/);
  assert.match(renderToStaticMarkup(h(components.RunSnipWordmark, { size: 32 })), / width="160.86" height="32"/);
  assert.match(renderToStaticMarkup(h(components.RunSnipMark, { size: 32 })), / width="32" height="32"/);
});

test("the drawings are the ones recorded: a change to any icon changes this", async () => {
  const all = [];
  for (const i of manifest) { const icon = (await import(`../icons/${i.file}.ts`)).default as Icon; all.push([icon.name, icon.node, icon.svg ?? null]); }
  assert.equal(createHash("sha256").update(JSON.stringify(all)).digest("hex"), "81f70e02160de0b45f15361346a52f45ceacb8a4ca60ab33cd9cc5afa9da2fba",
    "an icon's drawing changed: if meant, record the new hash here");
});

test("every icon keeps the set's rules: inside the field, one motif (scripts/audit.mjs)", async () => {
  const { execFileSync } = await import("node:child_process");
  const cwd = new URL("../", import.meta.url).pathname;
  const out = execFileSync(process.execPath, ["--experimental-strip-types", "--no-warnings", "--import", "./scripts/register.mjs", "scripts/audit.mjs"], { cwd, encoding: "utf8" });
  assert.match(out, / 0 failed/);
});

test("each coloured brand mark is what brand.ts makes of its plain mark now", async () => {
  /* A path held in a variable: the script is plain JavaScript, imported at run time, with no declarations to check. */
  const script = "../scripts/brand-colors.mjs";
  const { colourModule } = (await import(script)) as { colourModule: (app: string) => Promise<{ name: string; file: string; source: string }> };
  const { RUNSNIP_APPS } = await import("../brand");
  for (const app of Object.keys(RUNSNIP_APPS)) {
    const made = await colourModule(app);
    assert.equal(readFileSync(new URL(`icons/${made.file}.ts`, root), "utf8"), made.source, `${made.name}: run npm run generate`);
  }
});

test("every kind in every form: each module is what file-forms makes of its glyph now", async () => {
  /* A path held in a variable: the script is plain JavaScript, imported at run time, with no declarations to check. */
  const script = "../scripts/file-forms.mjs";
  const { forms: make } = (await import(script)) as { forms: () => Promise<{ entry: { name: string; file: string }; source: string }[]> };
  const made = await make();
  assert.deepEqual(made.map((m) => m.entry), forms, "forms.json: run npm run generate");
  for (const { entry, source } of made) assert.equal(readFileSync(new URL(`icons/${entry.file}.ts`, root), "utf8"), source, `${entry.name}: run npm run generate`);
  /* The coloured forms keep their colour: one given when drawing changes nothing inside. */
  const colored = toSvg((data as Record<string, unknown>).ReactFileColorIcon as Icon, { color: "red" });
  assert.doesNotMatch(colored.replace(/^<svg[^>]*>/, ""), /red/);
  assert.match(toSvg((data as Record<string, unknown>).ReactFileIcon as Icon), /currentColor/);
});
