import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shape with its outline emphasised. From the slides set. */
export const ShapeOutlineIcon: Icon = {
  name: "ShapeOutlineIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["circle", { cx: 12, cy: 12, r: 4, ...SOLID_STROKE }],
  ],
};

export default ShapeOutlineIcon;
