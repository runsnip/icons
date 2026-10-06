import type { Icon } from "../types";
import { SOLID } from "../system";

/** Grid layout: a 2×2 grid of squares. From the collab set. */
export const LayoutGridIcon: Icon = {
  name: "LayoutGridIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 7, height: 7, rx: 1.5, ...SOLID }],
    ["rect", { x: 13.5, y: 3.5, width: 7, height: 7, rx: 1.5 }],
    ["rect", { x: 3.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
    ["rect", { x: 13.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
  ],
};

export default LayoutGridIcon;
