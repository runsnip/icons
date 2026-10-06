import type { Icon } from "../types";
import { SOLID } from "../system";

/** Objects inside a dashed group frame. From the slides set. */
export const GroupIcon: Icon = {
  name: "GroupIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2, "stroke-dasharray": "1 3.25" }],
    ["rect", { x: 7, y: 7, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["rect", { x: 12.5, y: 12.5, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default GroupIcon;
