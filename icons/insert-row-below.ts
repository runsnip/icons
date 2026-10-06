import type { Icon } from "../types";
import { SOLID } from "../system";

/** A row added below. From the sheets set. */
export const InsertRowBelowIcon: Icon = {
  name: "InsertRowBelowIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 9.5, rx: 1.5 }],
    ["path", { d: "M12 3.5v9.5M3.5 8.25h17" }],
    ["rect", { x: 3.5, y: 16.5, width: 17, height: 4, rx: 1, ...SOLID }],
  ],
};

export default InsertRowBelowIcon;
