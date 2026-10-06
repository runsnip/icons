import type { Icon } from "../types";
import { SOLID } from "../system";

/** A column added right. From the sheets set. */
export const InsertColumnRightIcon: Icon = {
  name: "InsertColumnRightIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 9.5, height: 17, rx: 1.5 }],
    ["path", { d: "M3.5 12h9.5M8.25 3.5v17" }],
    ["rect", { x: 16.5, y: 3.5, width: 4, height: 17, rx: 1, ...SOLID }],
  ],
};

export default InsertColumnRightIcon;
