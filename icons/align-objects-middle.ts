import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes centred on a horizontal line. From the slides set. */
export const AlignObjectsMiddleIcon: Icon = {
  name: "AlignObjectsMiddleIcon",
  node: [
    ["path", { d: "M3.5 12h17", ...SOLID_STROKE }],
    ["rect", { x: 5, y: 4.5, width: 5, height: 15, rx: 1.5 }],
    ["rect", { x: 14, y: 7.5, width: 5, height: 9, rx: 1.5 }],
  ],
};

export default AlignObjectsMiddleIcon;
