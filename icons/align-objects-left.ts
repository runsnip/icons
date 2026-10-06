import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes aligned to a left line. From the slides set. */
export const AlignObjectsLeftIcon: Icon = {
  name: "AlignObjectsLeftIcon",
  node: [
    ["path", { d: "M4 3.5v17", ...SOLID_STROKE }],
    ["rect", { x: 7.5, y: 5, width: 13, height: 5, rx: 1.5 }],
    ["rect", { x: 7.5, y: 14, width: 8, height: 5, rx: 1.5 }],
  ],
};

export default AlignObjectsLeftIcon;
