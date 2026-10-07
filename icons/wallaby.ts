import type { Icon } from "../types";
import { SOLID } from "../system";

/** Wallaby: lines of code with coverage marks in the gutter, the marks the mark. From the files set. */
export const WallabyIcon: Icon = {
  name: "WallabyIcon",
  node: [
    ["path", { d: "M10.5 6h10M10.5 12h10M10.5 18h6" }],
    ["rect", { x: 3.5, y: 4.25, width: 3.5, height: 3.5, rx: 1, ...SOLID }],
    ["rect", { x: 3.5, y: 10.25, width: 3.5, height: 3.5, rx: 1, ...SOLID }],
    ["rect", { x: 3.5, y: 16.25, width: 3.5, height: 3.5, rx: 1, ...SOLID }],
  ],
};

export default WallabyIcon;
