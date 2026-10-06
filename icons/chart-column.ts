import type { Icon } from "../types";
import { SOLID } from "../system";

/** Vertical columns. From the sheets set. */
export const ChartColumnIcon: Icon = {
  name: "ChartColumnIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["path", { d: "M7 12h3.5v5H7ZM12.5 5.5H16V17h-3.5ZM18 10h2.5v7H18Z", ...SOLID }],
  ],
};

export default ChartColumnIcon;
