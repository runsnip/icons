import type { Icon } from "../types";
import { SOLID } from "../system";

/** A stack with the top emphasised. From the slides set. */
export const BringToFrontIcon: Icon = {
  name: "BringToFrontIcon",
  node: [
    ["path", { d: "M5.25 12H5a1.5 1.5 0 0 1-1.5-1.5V5a1.5 1.5 0 0 1 1.5-1.5H10.5a1.5 1.5 0 0 1 1.5 1.5V5.25" }],
    ["path", { d: "M9.5 16.25H9.25a1.5 1.5 0 0 1-1.5-1.5V9.25a1.5 1.5 0 0 1 1.5-1.5H14.75a1.5 1.5 0 0 1 1.5 1.5V9.5" }],
    ["rect", { x: 12, y: 12, width: 8.5, height: 8.5, rx: 1.5, ...SOLID }],
  ],
};

export default BringToFrontIcon;
