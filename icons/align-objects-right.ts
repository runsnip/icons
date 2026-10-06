import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes aligned to a right line. From the slides set. */
export const AlignObjectsRightIcon: Icon = {
  name: "AlignObjectsRightIcon",
  node: [
    ["path", { d: "M20 3.5v17", ...SOLID_STROKE }],
    ["rect", { x: 3.5, y: 5, width: 13, height: 5, rx: 1.5 }],
    ["rect", { x: 8.5, y: 14, width: 8, height: 5, rx: 1.5 }],
  ],
};

export default AlignObjectsRightIcon;
