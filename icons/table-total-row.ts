import type { Icon } from "../types";
import { SOLID } from "../system";

/** A total row: a table, its bottom row filled. From the insert set. */
export const TableTotalRowIcon: Icon = {
  name: "TableTotalRowIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 9.5h17M12 4.5v10" }],
    ["path", { d: "M3.5 14.5h17v3a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z", ...SOLID }],
  ],
};

export default TableTotalRowIcon;
