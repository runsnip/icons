import type { Icon } from "../types";
import { SOLID } from "../system";

/** A last column: a table, its right column filled. From the insert set. */
export const TableLastColumnIcon: Icon = {
  name: "TableLastColumnIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 9.5h11.3M3.5 14.5h11.3M9.2 4.5v15" }],
    ["path", { d: "M14.8 4.5h3.7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3.7Z", ...SOLID }],
  ],
};

export default TableLastColumnIcon;
