import type { Icon } from "../types";
import { SOLID } from "../system";

/** SPWN: a game cube, its inner square the mark. From the files set. */
export const SpwnIcon: Icon = {
  name: "SpwnIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 15, height: 15, rx: 2 }],
    ["rect", { x: 9, y: 9, width: 6, height: 6, rx: 1, ...SOLID }],
  ],
};

export default SpwnIcon;
