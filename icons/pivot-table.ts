import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A table with a pivot arrow in its corner. From the sheets set. */
export const PivotTableIcon: Icon = {
  name: "PivotTableIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M3.5 8h17M8 3.5v17M17.5 11a6.5 6.5 0 0 1-6.5 6.5" }],
    ["path", { d: "M15.5 13l2-2 2 2M13 15.5l-2 2 2 2", ...SOLID_STROKE }],
  ],
};

export default PivotTableIcon;
