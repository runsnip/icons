import type { Icon } from "../types";
import { SOLID } from "../system";

/** A first column: a table, its left column filled. From the insert set. */
export const TableFirstColumnIcon: Icon = {
  name: "TableFirstColumnIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M9.2 9.5h11.3M9.2 14.5h11.3M14.8 4.5v15" }],
    ["path", { d: "M5.5 4.5h3.7v15H5.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z", ...SOLID }],
  ],
};

export default TableFirstColumnIcon;
