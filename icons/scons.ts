import type { Icon } from "../types";
import { SOLID } from "../system";

/** SCons: two bricks laid and a third set on them filled. From the files set. */
export const SconsIcon: Icon = {
  name: "SconsIcon",
  node: [
    ["rect", { x: 3.5, y: 13.5, width: 7.5, height: 6, rx: 1.5 }],
    ["rect", { x: 13, y: 13.5, width: 7.5, height: 6, rx: 1.5 }],
    ["rect", { x: 8.25, y: 4.5, width: 7.5, height: 6, rx: 1.5, ...SOLID }],
  ],
};

export default SconsIcon;
