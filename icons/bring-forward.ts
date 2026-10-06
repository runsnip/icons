import type { Icon } from "../types";
import { SOLID } from "../system";

/** Two squares, the front one emphasised one step. From the slides set. */
export const BringForwardIcon: Icon = {
  name: "BringForwardIcon",
  node: [
    ["path", { d: "M7.5 14H5.5a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2V7.5" }],
    ["rect", { x: 10, y: 10, width: 10.5, height: 10.5, rx: 2, ...SOLID }],
  ],
};

export default BringForwardIcon;
