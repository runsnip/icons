import type { Icon } from "../types";
import { SOLID } from "../system";

/** A pie with a slice out. From the sheets set. */
export const ChartPieIcon: Icon = {
  name: "ChartPieIcon",
  node: [
    ["path", { d: "M11 5.5a7.5 7.5 0 1 0 7.5 7.5H11Z" }],
    ["path", { d: "M13 3.5V11h7.5A7.5 7.5 0 0 0 13 3.5Z", ...SOLID }],
  ],
};

export default ChartPieIcon;
