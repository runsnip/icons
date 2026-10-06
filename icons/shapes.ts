import type { Icon } from "../types";
import { SOLID } from "../system";

/** Shapes: a square overlapped by a circle. From the insert set. */
export const ShapesIcon: Icon = {
  name: "ShapesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11, height: 11, rx: 1.5 }],
    ["circle", { cx: 15.5, cy: 15.5, r: 5, ...SOLID }],
  ],
};

export default ShapesIcon;
