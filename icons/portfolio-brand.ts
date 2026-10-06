import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Portfolio: work in tiles, the first one the mark, in the brand frame. From the brand set. */
export const PortfolioBrandIcon: Icon = {
  name: "PortfolioBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["rect", { x: 7, y: 7, width: 4, height: 4, rx: 1, ...SOLID }],
    ["rect", { x: 13.5, y: 7, width: 3.5, height: 10, rx: 1 }],
    ["rect", { x: 7, y: 13.5, width: 4, height: 3.5, rx: 1 }],
  ],
};

export default PortfolioBrandIcon;
