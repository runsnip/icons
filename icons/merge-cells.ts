import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two cells joined, arrows meeting. From the sheets set. */
export const MergeCellsIcon: Icon = {
  name: "MergeCellsIcon",
  node: [
    ["rect", { x: 3.5, y: 12, width: 17, height: 8.5, rx: 1.5 }],
    ["path", { d: "M3.5 6.5h6.5M20.5 6.5H14" }],
    ["path", { d: "M8 4.5l2 2-2 2M16 4.5l-2 2 2 2", ...SOLID_STROKE }],
  ],
};

export default MergeCellsIcon;
