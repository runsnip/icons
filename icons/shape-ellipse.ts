import type { Icon } from "../types";
import { SOLID } from "../system";

/** An ellipse. From the slides set. */
export const ShapeEllipseIcon: Icon = {
  name: "ShapeEllipseIcon",
  node: [
    ["ellipse", { cx: 12, cy: 12, rx: 7, ry: 5.5 }],
    ["path", { d: "M3.5 5h3v3h-3ZM17.5 16h3v3h-3Z", ...SOLID }],
  ],
};

export default ShapeEllipseIcon;
