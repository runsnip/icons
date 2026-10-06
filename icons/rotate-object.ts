import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shape with a rotate handle. From the slides set. */
export const RotateObjectIcon: Icon = {
  name: "RotateObjectIcon",
  node: [
    ["rect", { x: 3.5, y: 10.5, width: 10, height: 10, rx: 2 }],
    ["path", { d: "M8.5 5.5a10 10 0 0 1 10 10" }],
    ["path", { d: "M16.25 13.25l2.25 2.25 2-2.25", ...SOLID_STROKE }],
  ],
};

export default RotateObjectIcon;
