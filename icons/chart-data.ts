import type { Icon } from "../types";
import { SOLID } from "../system";

/**
 * A chart's data sheet: one sheet holding a column chart above the grid of cells it is drawn from, each bar over its
 * own column of cells. The bars are the solid motif, as in ChartColumnIcon; the sheet and its grid stay in outline, as
 * in SpreadsheetIcon. Edit Data for a chart. From the sheets set.
 */
export const ChartDataIcon: Icon = {
  name: "ChartDataIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 1.5 }],
    ["path", { d: "M3.5 14h17M3.5 17.25h17M9.5 14v6.5M14.5 14v6.5" }],
    ["path", { d: "M6.25 8.5h2.5v3h-2.5ZM10.75 6h2.5v5.5h-2.5ZM15.25 7.5h2.5v4h-2.5Z", ...SOLID }],
  ],
};

export default ChartDataIcon;
