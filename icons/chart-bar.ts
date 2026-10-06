import type { Icon } from "../types";
import { SOLID } from "../system";

/** Horizontal bars. From the sheets set. */
export const ChartBarIcon: Icon = {
  name: "ChartBarIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["path", { d: "M7 4.5h8v3.5H7ZM7 10h13v3.5H7ZM7 15.5h5V19H7Z", ...SOLID }],
  ],
};

export default ChartBarIcon;
