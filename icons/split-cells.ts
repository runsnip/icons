import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A cell split, arrows apart. From the sheets set. */
export const SplitCellsIcon: Icon = {
  name: "SplitCellsIcon",
  node: [
    ["rect", { x: 3.5, y: 12, width: 17, height: 8.5, rx: 1.5 }],
    ["path", { d: "M12 12v8.5M10 6.5H3.5M14 6.5h6.5" }],
    ["path", { d: "M5.5 4.5l-2 2 2 2M18.5 4.5l2 2-2 2", ...SOLID_STROKE }],
  ],
};

export default SplitCellsIcon;
