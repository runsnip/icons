import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A table: a three-by-three grid under a header row. From the insert set. */
export const TableIcon: Icon = {
  name: "TableIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 14.25h17M9.2 9v10.5M14.8 9v10.5" }],
    ["path", { d: "M4 9h16", ...SOLID_STROKE }],
  ],
};

export default TableIcon;
