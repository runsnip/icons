import { RUNSNIP_APPS } from "../brand";
import { createElement, toSvg } from "../render";
import { icons } from "./names";
import { ATTRIBUTE, renderIcon, renderIcons, type Renderer } from "./load";

/**
 * The script a page loads from a CDN — every icon in one file, no build step:
 *
 *   <script src="https://cdn.jsdelivr.net/npm/@runsnip/icons"></script>
 *   <i data-rs-icon="bold"></i>
 *
 * When the page has loaded, each element carrying data-rs-icon becomes its icon's <svg> (see ./load.ts for the
 * attributes). HTML put in later — fetched, templated — is drawn by RunSnipLoad(container), or by the page itself
 * when the script tag says data-rs-observe. data-rs-manual on the tag leaves the first pass to the page too.
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
function RunSnipLoad(root: ParentNode | string = document): number {
  const at = typeof root === "string" ? document.querySelector(root) : root;
  return at ? renderIcons(at, renderer) : 0;
}

const RunSnipIcons = {
  load: RunSnipLoad,
  /** One element drawn; its <svg>, or null when its name is no icon. */
  render: (element: Element) => renderIcon(element, renderer),
  icons,
  names: Object.keys(icons),
  toSvg,
  createElement,
  apps: RUNSNIP_APPS,
};

declare global {
  interface Window {
    RunSnipLoad: typeof RunSnipLoad;
    RunSnipIcons: typeof RunSnipIcons;
  }
}

window.RunSnipLoad = RunSnipLoad;
window.RunSnipIcons = RunSnipIcons;

const script = document.currentScript;
const first = () => {
  if (!script?.hasAttribute("data-rs-manual")) RunSnipLoad();
  if (script?.hasAttribute("data-rs-observe")) {
    /* Elements added later are drawn as they arrive; an <svg> drawn here never carries data-rs-icon, so this never
       answers its own work. */
    new MutationObserver((records) => {
      for (const record of records) {
        for (const node of Array.from(record.addedNodes)) if (node.nodeType === 1) renderIcons(node as Element, renderer);
        if (record.type === "attributes" && (record.target as Element).hasAttribute?.(ATTRIBUTE)) renderIcon(record.target as Element, renderer);
      }
    }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: [ATTRIBUTE] });
  }
};
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", first, { once: true });
else first();
