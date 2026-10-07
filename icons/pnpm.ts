import type { Icon } from "../types";
import { SOLID } from "../system";

/** pnpm: its grid of squares, the filled ones the mark. From the files set. */
export const PnpmIcon: Icon = {
  name: "PnpmIcon",
  node: [
    ["rect", { x: 9.75, y: 9.75, width: 4.5, height: 4.5, rx: 1 }],
    ["rect", { x: 3.5, y: 16, width: 4.5, height: 4.5, rx: 1 }],
    ["rect", { x: 9.75, y: 16, width: 4.5, height: 4.5, rx: 1 }],
    ["rect", { x: 16, y: 16, width: 4.5, height: 4.5, rx: 1 }],
    ["rect", { x: 3.5, y: 3.5, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["rect", { x: 9.75, y: 3.5, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["rect", { x: 16, y: 3.5, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["rect", { x: 16, y: 9.75, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default PnpmIcon;
