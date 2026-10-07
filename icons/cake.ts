import type { Icon } from "../types";
import { SOLID } from "../system";

/** Cake: a layered cake, its candle's flame the mark. From the files set. */
export const CakeIcon: Icon = {
  name: "CakeIcon",
  node: [
    ["rect", { x: 6.5, y: 10, width: 11, height: 4, rx: 1 }],
    ["rect", { x: 4, y: 14, width: 16, height: 6, rx: 1.5 }],
    ["path", { d: "M12 3.5c1.4 1.3 2 2.2 2 3a2 2 0 0 1-4 0c0-.8.6-1.7 2-3Z", ...SOLID }],
  ],
};

export default CakeIcon;
