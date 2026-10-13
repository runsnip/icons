import type { Icon } from "../types";
import { SOLID } from "../system";

/** Different odd and even pages: two facing pages, each numbered at its outer corner. From the insert set. */
export const OddEvenPagesIcon: Icon = {
  name: "OddEvenPagesIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 7.5, height: 15, rx: 2 }],
    ["rect", { x: 13, y: 4.5, width: 7.5, height: 15, rx: 2 }],
    ["rect", { x: 5, y: 15, width: 2.5, height: 2.5, rx: .5, ...SOLID }],
    ["rect", { x: 16.5, y: 15, width: 2.5, height: 2.5, rx: .5, ...SOLID }],
  ],
};

export default OddEvenPagesIcon;
