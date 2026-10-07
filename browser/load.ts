import { resolveIcon, type IconForm } from "../files";
import { createElement } from "../render";
import type { Icon } from "../types";

/**
 * Icons written into a page as attributes, drawn where they stand: any element carrying `data-rs-icon` is replaced
 * by the icon's `<svg>`.
 *
 *   <i data-rs-icon="bold"></i>
 *   <span data-rs-icon="chevron-right" data-rs-size="16" class="muted" aria-label="Next"></span>
 *
 *   data-rs-icon          the icon, by its file name (bold, chevron-right) or an alias's
 *   data-rs-size          px; for a logo wider than tall, its height
 *   data-rs-color         the stroke's colour (the fill's for a filled mark); currentColor otherwise
 *   data-rs-stroke-width  the stroke's width
 *   data-rs-file          in place of data-rs-icon: a file's name, drawn as its kind's glyph (a page when none)
 *   data-rs-folder        in place of data-rs-icon: a folder's name, drawn as a folder carrying its kind's glyph
 *   data-rs-form          glyph, file or folder (files.ts); data-rs-open, a folder open; data-rs-colored, the kind's
 *                         own colour rather than the text's
 *
 * Every other attribute — class, id, style, aria-*, data-* — moves onto the `<svg>`. An icon with `aria-label`,
 * `aria-labelledby` or `title` is an image with that name; one without is decoration, hidden from assistive
 * technology. The `<svg>` carries `data-rs-rendered="<name>"` and no `data-rs-icon`, so a second pass leaves it be.
 */

export const ATTRIBUTE = "data-rs-icon";
/** Every attribute that makes an element an icon to draw. */
export const SELECTOR = "[data-rs-icon],[data-rs-file],[data-rs-folder]";
const OWN = /^data-rs-/;
const NAMED = ["aria-label", "aria-labelledby"];

const numberOf = (value: string | null): number | undefined => {
  if (value === null || value.trim() === "") return undefined;
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
};

/** What a page's elements are drawn with: the icons by name, and what to say of a name that is none. */
export interface Renderer {
  icons: Record<string, Icon>;
  /** Told once per unknown name; console.warn by default. */
  unknown?: (name: string, element: Element) => void;
}

/** One element replaced by its icon's `<svg>`, which is returned; null, and the element left, when the name is no icon. */
export function renderIcon(element: Element, renderer: Renderer): SVGSVGElement | null {
  const file = element.getAttribute("data-rs-file");
  const folder = element.getAttribute("data-rs-folder");
  const name = (element.getAttribute(ATTRIBUTE) ?? "").trim().toLowerCase();
  const icon = resolveIcon(renderer.icons, {
    name: file === null && folder === null ? name : undefined,
    file: file ?? undefined,
    folder: folder ?? undefined,
    form: (element.getAttribute("data-rs-form") as IconForm | null) ?? undefined,
    open: element.hasAttribute("data-rs-open"),
    colored: element.hasAttribute("data-rs-colored"),
  });
  if (!icon) {
    renderer.unknown?.(name, element);
    return null;
  }
  const doc = element.ownerDocument;
  const svg = createElement(icon, {
    size: numberOf(element.getAttribute("data-rs-size")),
    color: element.getAttribute("data-rs-color") ?? undefined,
    strokeWidth: numberOf(element.getAttribute("data-rs-stroke-width")),
  }, doc);
  let title: string | null = null;
  for (const { name: attribute, value } of Array.from(element.attributes)) {
    if (OWN.test(attribute)) continue;
    /* An <svg>'s title attribute is no tooltip and no name: SVG takes both from a <title> child. */
    if (attribute === "title") { title = value; continue; }
    svg.setAttribute(attribute, value);
  }
  if (title !== null) {
    const child = doc.createElementNS("http://www.w3.org/2000/svg", "title");
    child.textContent = title;
    svg.insertBefore(child, svg.firstChild);
  }
  if (title !== null || NAMED.some((a) => svg.hasAttribute(a))) {
    svg.removeAttribute("aria-hidden");
    if (!svg.hasAttribute("role")) svg.setAttribute("role", "img");
  } else svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("data-rs-rendered", folder ?? file ?? name);
  element.replaceWith(svg);
  return svg;
}

/** Every element under `root` (and `root` itself) carrying data-rs-icon, drawn; the number drawn. */
export function renderIcons(root: ParentNode, renderer: Renderer): number {
  const found: Element[] = [];
  if ((root as Element).nodeType === 1 && (root as Element).matches(SELECTOR)) found.push(root as Element);
  found.push(...Array.from(root.querySelectorAll(SELECTOR)));
  let drawn = 0;
  for (const element of found) if (renderIcon(element, renderer)) drawn++;
  return drawn;
}
