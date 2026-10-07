import type { Icon, IconOptions } from "./types";

/**
 * Drawing an icon outside any framework: as a string (a server, a static page, an email) or as a DOM element (a
 * plain page, Angular, Vue, the office artifacts). Both give the same `<svg>` the React components give.
 */

/** The set's stance: a stroked mark on a 24-unit square, round ends and joins. */
export const DEFAULTS: Readonly<Record<string, string | number>> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};

/** Width over height of an icon's viewBox: 1 for the set's square, about 5 for the wordmark. */
export function aspectOf(icon: Icon): number {
  const box = String(icon.svg?.viewBox ?? DEFAULTS.viewBox).trim().split(/[\s,]+/).map(Number);
  return box[2] > 0 && box[3] > 0 ? box[2] / box[3] : 1;
}

/** The width that goes with a height, for this icon's shape. */
export const widthFor = (icon: Icon, height: number): number => Math.round(height * aspectOf(icon) * 100) / 100;

/** The `<svg>` element's attributes for an icon drawn with these options, in a fixed order. */
export function svgAttributes(icon: Icon, options: IconOptions = {}): Record<string, string | number> {
  const out: Record<string, string | number | null> = { ...DEFAULTS, ...icon.svg };
  if (options.size !== undefined) { out.width = widthFor(icon, options.size); out.height = options.size; }
  /* The colour is the stroke's — or, for a mark that is filled and not stroked (the wordmark, GitHub's), the fill's. */
  if (options.color !== undefined) {
    if (out.stroke === "none" && out.fill === "currentColor") out.fill = options.color;
    else out.stroke = options.color;
  }
  if (options.strokeWidth !== undefined) out["stroke-width"] = options.strokeWidth;
  for (const [key, value] of Object.entries(options.attributes ?? {})) {
    if (value === undefined || value === false) continue;
    out[key] = value === true ? "" : value;
  }
  return Object.fromEntries(Object.entries(out).filter((entry): entry is [string, string | number] => entry[1] !== null));
}

const escape = (value: string | number) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const attrs = (record: Record<string, string | number>) => Object.entries(record).map(([k, v]) => ` ${k}="${escape(v)}"`).join("");

/** The icon as an SVG string. */
export function toSvg(icon: Icon, options: IconOptions = {}): string {
  const children = icon.node.map(([tag, a]) => `<${tag}${attrs(a)}></${tag}>`).join("");
  return `<svg${attrs(svgAttributes(icon, options))}>${children}</svg>`;
}

const SVG_NS = "http://www.w3.org/2000/svg";

/** The icon as an `<svg>` element of this document (the page's by default). */
export function createElement(icon: Icon, options: IconOptions = {}, doc: Document = document): SVGSVGElement {
  const svg = doc.createElementNS(SVG_NS, "svg");
  for (const [k, v] of Object.entries(svgAttributes(icon, options))) if (k !== "xmlns") svg.setAttribute(k, String(v));
  for (const [tag, a] of icon.node) {
    const child = doc.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(a)) child.setAttribute(k, String(v));
    svg.appendChild(child);
  }
  return svg;
}
