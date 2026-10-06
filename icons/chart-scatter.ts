import type { Icon } from "../types";
import { SOLID } from "../system";

/** Dots scattered on axes. From the sheets set. */
export const ChartScatterIcon: Icon = {
  name: "ChartScatterIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["circle", { cx: 8, cy: 15.5, r: 1.7, ...SOLID }],
    ["circle", { cx: 11.5, cy: 10, r: 1.7, ...SOLID }],
    ["circle", { cx: 14.5, cy: 13, r: 1.7, ...SOLID }],
    ["circle", { cx: 18, cy: 6.5, r: 1.7, ...SOLID }],
    ["circle", { cx: 17.5, cy: 15, r: 1.7, ...SOLID }],
  ],
};

export default ChartScatterIcon;
