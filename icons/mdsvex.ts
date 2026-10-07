import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** mdsvex: Markdown's M in a frame with Svelte's S, the S the mark. From the files set. */
export const MdsvexIcon: Icon = {
  name: "MdsvexIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M6.5 15V9l2.5 3 2.5-3v6" }],
    ["path", { d: "M18 9.5h-2.2a1.25 1.25 0 0 0 0 2.5h1a1.25 1.25 0 0 1 0 2.5h-2.3", ...SOLID_STROKE }],
  ],
};

export default MdsvexIcon;
