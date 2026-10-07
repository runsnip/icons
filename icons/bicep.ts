import type { Icon } from "../types";
import { SOLID } from "../system";

/** A flexed arm, its fist filled: Bicep. From the files set. */
export const BicepIcon: Icon = {
  name: "BicepIcon",
  node: [
    ["path", { d: "M3.5 19.5H15a4.5 4.5 0 0 0 4.5-4.5V9.5M3.5 14.5h2.2c1.2-3.3 5.2-4.6 8.3-2.6V9.5" }],
    ["rect", { x: 12.5, y: 3.5, width: 8, height: 5.5, rx: 1.5, ...SOLID }],
  ],
};

export default BicepIcon;
