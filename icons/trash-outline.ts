import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A bin in outline, its lid the mark: TrashIcon unfilled. From the ui set. */
export const TrashOutlineIcon: Icon = {
  name: "TrashOutlineIcon",
  node: [
    ["path", { d: "M4.5 7h15", ...SOLID_STROKE }],
    ["path", { d: "M9.5 7V4.5h5V7" }],
    ["rect", { x: 6.5, y: 9.5, width: 11, height: 11, rx: 2 }],
  ],
};

export default TrashOutlineIcon;
