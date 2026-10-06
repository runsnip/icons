import type { Icon } from "../types";
import { SOLID } from "../system";

/** A column added left. From the sheets set. */
export const InsertColumnLeftIcon: Icon = {
  name: "InsertColumnLeftIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 4, height: 17, rx: 1, ...SOLID }],
    ["rect", { x: 11, y: 3.5, width: 9.5, height: 17, rx: 1.5 }],
    ["path", { d: "M11 12h9.5M15.75 3.5v17" }],
  ],
};

export default InsertColumnLeftIcon;
