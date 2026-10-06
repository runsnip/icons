import type { Icon } from "../types";
import { SOLID } from "../system";

/** A row added above a table. From the sheets set. */
export const InsertRowAboveIcon: Icon = {
  name: "InsertRowAboveIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 4, rx: 1, ...SOLID }],
    ["rect", { x: 3.5, y: 11, width: 17, height: 9.5, rx: 1.5 }],
    ["path", { d: "M12 11v9.5M3.5 15.75h17" }],
  ],
};

export default InsertRowAboveIcon;
