import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A page with a curved arrow. From the pdf set. */
export const RotatePageIcon: Icon = {
  name: "RotatePageIcon",
  node: [
    ["rect", { x: 3.5, y: 9, width: 10, height: 11.5, rx: 2 }],
    ["path", { d: "M7.5 5.5H13a5 5 0 0 1 5 5V15" }],
    ["path", { d: "M15.5 12.5 18 15l2.5-2.5", ...SOLID_STROKE }],
  ],
};

export default RotatePageIcon;
