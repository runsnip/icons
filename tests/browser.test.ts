import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { icons } from "../browser/names";
import { renderIcon, renderIcons } from "../browser/load";

/* Just enough of a DOM for the drawing: elements with attributes and children, replaceWith, and a query by attribute. */
class Node_ {
  nodeType = 1;
  parent: Node_ | null = null;
  children: Node_[] = [];
  attrs = new Map<string, string>();
  textContent = "";
  tagName: string;
  ownerDocument: Doc;
  constructor(tagName: string, ownerDocument: Doc) { this.tagName = tagName; this.ownerDocument = ownerDocument; }
  get attributes() { return [...this.attrs].map(([name, value]) => ({ name, value })); }
  get firstChild() { return this.children[0] ?? null; }
  getAttribute(n: string) { return this.attrs.get(n) ?? null; }
  setAttribute(n: string, v: string) { this.attrs.set(n, String(v)); }
  hasAttribute(n: string) { return this.attrs.has(n); }
  removeAttribute(n: string) { this.attrs.delete(n); }
  appendChild(c: Node_) { c.parent = this; this.children.push(c); return c; }
  insertBefore(c: Node_, ref: Node_ | null) { c.parent = this; const i = ref ? this.children.indexOf(ref) : -1; if (i < 0) this.children.push(c); else this.children.splice(i, 0, c); return c; }
  replaceWith(c: Node_) { const p = this.parent!; p.children[p.children.indexOf(this)] = c; c.parent = p; }
  querySelectorAll(selector: string) { const name = /^\[(.+)\]$/.exec(selector)![1]; const out: Node_[] = []; const walk = (n: Node_) => { for (const c of n.children) { if (c.hasAttribute(name)) out.push(c); walk(c); } }; walk(this); return out; }
}
class Doc { createElementNS(_: string, tag: string) { return new Node_(tag, this); } }
const page = (...attrs: Record<string, string>[]) => {
  const doc = new Doc(); const root = new Node_("div", doc);
  for (const a of attrs) { const el = new Node_("i", doc); for (const [k, v] of Object.entries(a)) el.setAttribute(k, v); root.appendChild(el); }
  return root;
};
const as = (root: Node_) => root as unknown as Element;

test("a page names every icon by its file name, and an alias by its own", () => {
  const manifest = JSON.parse(readFileSync(new URL("../icons.json", import.meta.url), "utf8")) as { name: string; file: string }[];
  for (const i of manifest) assert.equal(icons[i.file]?.name, i.name, i.file);
  assert.equal(icons["loader2"]?.name, "SpinnerIcon");
});

test("data-rs-icon is replaced by its <svg>, its attributes moved, named or hidden", () => {
  const root = page(
    { "data-rs-icon": "Bold", "data-rs-size": "16", class: "ic", "data-x": "1" },
    { "data-rs-icon": "chevron-right", "aria-label": "Next" },
    { "data-rs-icon": "trash", title: "Delete", "data-rs-color": "red" },
    { "data-rs-icon": "run-snip-wordmark", "data-rs-size": "20" },
    { "data-rs-icon": "nope" },
  );
  const unknown: string[] = [];
  assert.equal(renderIcons(as(root), { icons, unknown: (n) => unknown.push(n) }), 4);
  const [bold, next, trash, wordmark, nope] = root.children;
  assert.deepEqual([bold.tagName, bold.getAttribute("width"), bold.getAttribute("class"), bold.getAttribute("data-x"), bold.getAttribute("aria-hidden"), bold.getAttribute("data-rs-rendered")], ["svg", "16", "ic", "1", "true", "bold"]);
  assert.equal(bold.hasAttribute("data-rs-icon"), false);
  assert.deepEqual([next.getAttribute("role"), next.getAttribute("aria-label"), next.hasAttribute("aria-hidden")], ["img", "Next", false]);
  assert.deepEqual([trash.getAttribute("stroke"), trash.children[0].tagName, trash.children[0].textContent, trash.hasAttribute("title")], ["red", "title", "Delete", false]);
  assert.deepEqual([wordmark.getAttribute("width"), wordmark.getAttribute("height")], ["100.54", "20"]);
  assert.deepEqual([nope.tagName, unknown], ["i", ["nope"]]);
  /* Drawn once: a second pass finds nothing left to draw but the name that is no icon. */
  assert.equal(renderIcons(as(root), { icons }), 0);
  assert.equal(renderIcon(as(nope), { icons }), null);
});
