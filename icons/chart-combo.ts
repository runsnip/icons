import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Columns with a line over them. From the sheets set. */
export const ChartComboIcon: Icon = {
  name: "ChartComboIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["path", { d: "M8 17v-4M12.5 17v-7M17 17v-4.5" }],
    ["path", { d: "M7 9.5l5.5-4 6 3", ...SOLID_STROKE }],
  ],
};

export default ChartComboIcon;
