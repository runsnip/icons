import { test } from "node:test";
import assert from "node:assert/strict";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { FIELD, FileCodeIcon, LockIcon, fileKindOf, folderKindOf, iconForm, resolveIcon, toSvg, transformPath, type Icon } from "../index";
import { BY_EXTENSION, BY_FILE_NAME, BY_FOLDER_NAME, KIND_COLORS } from "../kinds";
import { icons } from "../browser/names";
import { Icon as IconComponent } from "../react/index";

/* A path held in a variable: the script is plain JavaScript, with no declarations to check. */
const boundsScript = "../scripts/bounds.mjs";
const { elementBounds } = (await import(boundsScript)) as { elementBounds: (tag: string, a: object) => Record<string, number> | null };

test("a path moves and scales: absolute coordinates moved, relative ones only scaled, arc flags kept", () => {
  assert.equal(transformPath("M2 4h2v2H2Z", 0.5, 10, 20), "M11 22h1v1H11Z");
  assert.equal(transformPath("M10 10a2 2 0 0 1 4 0A2 2 0 014 4", 0.5, 1, 1), "M6 6a1 1 0 0 1 2 0A1 1 0 0 1 3 3");
  assert.equal(transformPath("M1-2l3.5.5", 2, 0, 0), "M2 -4l7 1");
});

test("every form of an icon stays inside the field, and the corner glyph keeps its shapes", () => {
  for (const icon of [LockIcon, FileCodeIcon]) {
    for (const options of [{ form: "file" }, { form: "folder" }, { form: "folder", open: true }] as const) {
      const made = iconForm(icon, options);
      assert.equal(made.node.length > icon.node.length, true);
      for (const [tag, a] of made.node) {
        const b = elementBounds(tag, a)!;
        for (const v of Object.values(b)) assert.ok(v >= FIELD.min - 0.1 && v <= FIELD.max + 0.1, `${made.name} ${tag} ${JSON.stringify(b)}`);
      }
      assert.equal(iconForm(icon, options), made, "the same icon and options give the same object");
    }
  }
});

test("a coloured form is drawn in its colour alone, and takes no colour from the page", () => {
  const svg = toSvg(iconForm(LockIcon, { form: "file", colored: true, color: "#123456" }));
  assert.doesNotMatch(svg.replace(/<svg[^>]*>/, ""), /currentColor/);
  assert.match(svg, /stroke="#123456"/);
  assert.match(toSvg(iconForm(null, { form: "folder", colored: true })), /#6D87AB/);
});

test("names find their kinds: whole names, then patterns, then the longest extension; folders by name", () => {
  const [ext, kind] = Object.entries(BY_EXTENSION)[0] ?? [];
  if (ext) assert.equal(fileKindOf(`some/dir/File.${ext.toUpperCase()}`), kind);
  const [name, nameKind] = Object.entries(BY_FILE_NAME)[0] ?? [];
  if (name) assert.equal(fileKindOf(name), nameKind);
  const [folder, folderKind] = Object.entries(BY_FOLDER_NAME)[0] ?? [];
  if (folder) assert.equal(folderKindOf(`a/b/${folder}/`), folderKind);
  for (const [k, color] of Object.entries(KIND_COLORS)) {
    assert.ok(icons[k], `kind ${k} has no icon`);
    assert.match(color, /^#[0-9A-F]{6}$/);
  }
  assert.equal(fileKindOf("no-such-kind.zzzzqq"), null);
  assert.equal(folderKindOf("no-such-kind-zzzzqq"), null);
});

test("resolveIcon: a file of no kind is a page, a folder of no kind a folder, an unknown name nothing", () => {
  assert.equal(resolveIcon(icons, { file: "x.zzzzqq" })?.name, "FileFrame");
  assert.equal(resolveIcon(icons, { folder: "zzzzqq", open: true })?.name, "FolderOpenedFrame");
  assert.equal(resolveIcon(icons, { name: "no-such-icon" }), null);
  assert.equal(resolveIcon(icons, { name: "lock" }), LockIcon);
  assert.equal(resolveIcon(icons, { name: "lock", form: "file" })?.name, "LockFileIcon");
});

test("<Icon> by name, by file and by folder draws what toSvg draws", () => {
  const parse = (markup: string) => [...markup.matchAll(/<([a-z]+)([^>]*)>/g)].map(([, tag, attrs]) =>
    tag + " " + [...attrs.matchAll(/([a-zA-Z:-]+)="([^"]*)"/g)].map((m) => m[1] + "=" + m[2]).sort().join(" "));
  const same = (props: object, icon: Icon) =>
    assert.deepEqual(parse(renderToStaticMarkup(h(IconComponent, props as never))), parse(toSvg(icon)), JSON.stringify(props));
  same({ name: "lock" }, LockIcon);
  same({ name: "lock", form: "folder", open: true }, iconForm(LockIcon, { form: "folder", open: true }));
  same({ file: "x.zzzzqq" }, iconForm(null, { form: "file" }));
  same({ folder: "zzzzqq" }, iconForm(null, { form: "folder" }));
  same({ icon: LockIcon, form: "file" }, iconForm(LockIcon, { form: "file" }));
  assert.equal(renderToStaticMarkup(h(IconComponent, { name: "no-such-icon" } as never)), "");
});

test("a kind is found as Material Icon Theme finds it: by languages' extensions, marked folder names, a name in its folder", () => {
  /* Shell and batch files, which the theme assigns by language rather than by extension. */
  for (const name of ["a.sh", "a.bash", "a.zsh", "a.fish", "a.bat", "a.cmd"]) assert.equal(fileKindOf(name), "terminal", name);
  /* A folder's name bare of the marks round it: _src, .src, -src and __src__ are src. */
  for (const name of ["src", "_src", ".src", "-src", "__src__"]) assert.equal(folderKindOf(name), folderKindOf("src"), name);
  /* A name kept with its folder, ahead of the name alone. */
  assert.equal(fileKindOf("project/.config/babelrc"), "babel");
  assert.equal(folderKindOf(".github/workflows"), "workflow");
  assert.equal(folderKindOf("i18n"), "translate");
});
