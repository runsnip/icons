import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A row with a vertical double arrow. From the sheets set. */
export const RowHeightIcon: Icon = {
  name: "RowHeightIcon",
  node: [
    ["path", { d: "M3.5 4h17M3.5 20h17M12 7v10" }],
    ["path", { d: "M9 9.5l3-3 3 3M9 14.5l3 3 3-3", ...SOLID_STROKE }],
  ],
};

export default RowHeightIcon;
