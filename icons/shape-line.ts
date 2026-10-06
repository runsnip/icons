import type { Icon } from "../types";
import { SOLID } from "../system";

/** A diagonal line with end dots. From the slides set. */
export const ShapeLineIcon: Icon = {
  name: "ShapeLineIcon",
  node: [
    ["path", { d: "M5.5 18.5 18.5 5.5" }],
    ["circle", { cx: 5.5, cy: 18.5, r: 2, ...SOLID }],
    ["circle", { cx: 18.5, cy: 5.5, r: 2, ...SOLID }],
  ],
};

export default ShapeLineIcon;
