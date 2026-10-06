import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A line chart. From the sheets set. */
export const ChartLineIcon: Icon = {
  name: "ChartLineIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["path", { d: "M7 15l4-5 3.5 3L20 6", ...SOLID_STROKE }],
  ],
};

export default ChartLineIcon;
