import type { Icon } from "../types";
import { SOLID } from "../system";

/** A header row: a table, its top row filled. From the insert set. */
export const TableHeaderRowIcon: Icon = {
  name: "TableHeaderRowIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 14.5h17M12 9.5v10" }],
    ["path", { d: "M3.5 6.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17Z", ...SOLID }],
  ],
};

export default TableHeaderRowIcon;
