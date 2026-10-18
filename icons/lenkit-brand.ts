import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Lenkit: a lens over one tool's work, its focus the mark, in the brand frame. From the brand set. */
export const LenkitBrandIcon: Icon = {
  name: "LenkitBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["circle", { cx: 11, cy: 11, r: 4.25 }],
    ["circle", { cx: 11, cy: 11, r: 1.75, ...SOLID }],
    ["path", { d: "m14.25 14.25 2.75 2.75" }],
  ],
};

export default LenkitBrandIcon;
