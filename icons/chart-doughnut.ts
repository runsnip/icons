import type { Icon } from "../types";
import { SOLID } from "../system";

/** A ring chart. From the sheets set. */
export const ChartDoughnutIcon: Icon = {
  name: "ChartDoughnutIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 12, r: 3.5 }],
    ["path", { d: "M12 3.5a8.5 8.5 0 0 1 8.5 8.5h-5A3.5 3.5 0 0 0 12 8.5Z", ...SOLID }],
  ],
};

export default ChartDoughnutIcon;
