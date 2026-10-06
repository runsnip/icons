import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes standing on a bottom line. From the slides set. */
export const AlignObjectsBottomIcon: Icon = {
  name: "AlignObjectsBottomIcon",
  node: [
    ["path", { d: "M3.5 20h17", ...SOLID_STROKE }],
    ["rect", { x: 5, y: 3.5, width: 5, height: 13, rx: 1.5 }],
    ["rect", { x: 14, y: 11.5, width: 5, height: 8, rx: 1.5 }],
  ],
};

export default AlignObjectsBottomIcon;
