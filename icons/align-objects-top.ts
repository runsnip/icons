import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes hanging from a top line. From the slides set. */
export const AlignObjectsTopIcon: Icon = {
  name: "AlignObjectsTopIcon",
  node: [
    ["path", { d: "M3.5 4h17", ...SOLID_STROKE }],
    ["rect", { x: 5, y: 7.5, width: 5, height: 13, rx: 1.5 }],
    ["rect", { x: 14, y: 7.5, width: 5, height: 8, rx: 1.5 }],
  ],
};

export default AlignObjectsTopIcon;
