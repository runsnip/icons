import type { Icon } from "../types";
import { SOLID } from "../system";

/** A triangle. From the slides set. */
export const ShapeTriangleIcon: Icon = {
  name: "ShapeTriangleIcon",
  node: [
    ["path", { d: "M12 6.5 19 17.5H5Z" }],
    ["path", { d: "M3.5 5h3v3h-3ZM17.5 16h3v3h-3Z", ...SOLID }],
  ],
};

export default ShapeTriangleIcon;
