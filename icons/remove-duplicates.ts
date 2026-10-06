import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two stacked rows, one crossed. From the sheets set. */
export const RemoveDuplicatesIcon: Icon = {
  name: "RemoveDuplicatesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 6.5, rx: 1.5 }],
    ["rect", { x: 3.5, y: 14, width: 10, height: 6.5, rx: 1.5 }],
    ["path", { d: "M16.5 15.25l4 4M20.5 15.25l-4 4", ...SOLID_STROKE }],
  ],
};

export default RemoveDuplicatesIcon;
