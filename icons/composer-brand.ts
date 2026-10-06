import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Composer: two notes beamed, their heads the mark, in the brand frame. From the brand set. */
export const ComposerBrandIcon: Icon = {
  name: "ComposerBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M10.5 16V8.5l7-1.5v7.5" }],
    ["path", { d: "M7.5 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M14.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", ...SOLID }],
  ],
};

export default ComposerBrandIcon;
