import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A column with a horizontal double arrow. From the sheets set. */
export const ColumnWidthIcon: Icon = {
  name: "ColumnWidthIcon",
  node: [
    ["path", { d: "M4 3.5v17M20 3.5v17M7 12h10" }],
    ["path", { d: "M9.5 9l-3 3 3 3M14.5 9l3 3-3 3", ...SOLID_STROKE }],
  ],
};

export default ColumnWidthIcon;
