import type { Icon } from "../types";
import { SOLID } from "../system";

/** A rectangle. From the slides set. */
export const ShapeRectangleIcon: Icon = {
  name: "ShapeRectangleIcon",
  node: [
    ["rect", { x: 5, y: 6.5, width: 14, height: 11, rx: 2 }],
    ["path", { d: "M3.5 5h3v3h-3ZM17.5 16h3v3h-3Z", ...SOLID }],
  ],
};

export default ShapeRectangleIcon;
