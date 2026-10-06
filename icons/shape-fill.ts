import type { Icon } from "../types";
import { SOLID } from "../system";

/** A shape filled. From the slides set. */
export const ShapeFillIcon: Icon = {
  name: "ShapeFillIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["circle", { cx: 12, cy: 12, r: 5, ...SOLID }],
  ],
};

export default ShapeFillIcon;
