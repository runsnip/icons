import type { Icon } from "../types";
import { SOLID } from "../system";

/** Banded rows: a table, every other row filled. From the insert set. */
export const TableBandedRowsIcon: Icon = {
  name: "TableBandedRowsIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M12 4.5v5M12 14.5v5" }],
    ["rect", { x: 3.5, y: 9.5, width: 17, height: 5, ...SOLID }],
  ],
};

export default TableBandedRowsIcon;
