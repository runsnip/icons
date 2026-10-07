import { RUNSNIP_APPS } from "../brand";
import { createElement, toSvg } from "../render";
import { icons } from "./names";
import { ATTRIBUTE, SELECTOR, renderIcon, renderIcons, type Renderer } from "./load";

/**
 * The UMD build (dist/icons.umd.js): every icon in one file, for a page with no build step —
 *
 *   <script src="https://cdn.jsdelivr.net/npm/@runsnip/icons@0.1"></script>
 *   <i data-rs-icon="bold"></i>
 *
 * In a page it is window.RunSnipIcons (and window.RunSnipLoad); under AMD the module's value. Where there
 * is a document, each element carrying data-rs-icon becomes its icon's <svg> once the page has loaded (./load.ts has
 * the attributes); HTML put in later is drawn by RunSnipLoad(container), or as it arrives when the script tag says
 * data-rs-observe. data-rs-manual on the tag leaves the first pass to the page. A module bundler never takes this file:
 * the package's exports are the ES modules.
 */

const warned = new Set<string>();
const renderer: Renderer = {
  icons,
  unknown(name) {
    if (warned.has(name)) return;
    warned.add(name);
    console.warn(`@runsnip/icons: no icon named "${name}" (names: RunSnipIcons.names)`);
  },
};

/** Draws every data-rs-icon under `root`: the page by default, an element, or the first one a selector finds. */
export function load(root: ParentNode | string = document): number {
  const at = typeof root === "string" ? document.querySelector(root) : root;
  return at ? renderIcons(at, renderer) : 0;
}

/** One element drawn; its <svg>, or null when its name is no icon. */
export const render = (element: Element) => renderIcon(element, renderer);
export const names = Object.keys(icons);
export { icons, toSvg, createElement, RUNSNIP_APPS as apps };

if (typeof document !== "undefined") {
  const script = document.currentScript;
  const first = () => {
    if (!script?.hasAttribute("data-rs-manual")) load();
    if (script?.hasAttribute("data-rs-observe")) {
      /* Elements added later are drawn as they arrive; an <svg> drawn here never carries data-rs-icon, -file or -folder, so this never
         answers its own work. */
      new MutationObserver((records) => {
        for (const record of records) {
          for (const node of Array.from(record.addedNodes)) if (node.nodeType === 1) renderIcons(node as Element, renderer);
          if (record.type === "attributes" && (record.target as Element).matches?.(SELECTOR)) renderIcon(record.target as Element, renderer);
        }
      }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: [ATTRIBUTE, "data-rs-file", "data-rs-folder"] });
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", first, { once: true });
  else first();
}
