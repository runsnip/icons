import type { Icon } from "../types";
import { SOLID } from "../system";

/** Banded columns: a table, every other column filled. From the insert set. */
export const TableBandedColumnsIcon: Icon = {
  name: "TableBandedColumnsIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 9.5h5.7M3.5 14.5h5.7M14.8 9.5h5.7M14.8 14.5h5.7" }],
    ["rect", { x: 9.2, y: 4.5, width: 5.6, height: 15, ...SOLID }],
  ],
};

export default TableBandedColumnsIcon;
