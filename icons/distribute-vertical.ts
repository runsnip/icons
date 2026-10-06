import type { Icon } from "../types";
import { SOLID } from "../system";

/** Three boxes evenly spaced down. From the slides set. */
export const DistributeVerticalIcon: Icon = {
  name: "DistributeVerticalIcon",
  node: [
    ["rect", { x: 5, y: 3.5, width: 14, height: 3.5, rx: 1.5 }],
    ["rect", { x: 7.5, y: 10.25, width: 9, height: 3.5, rx: 1, ...SOLID }],
    ["rect", { x: 5, y: 17, width: 14, height: 3.5, rx: 1.5 }],
  ],
};

export default DistributeVerticalIcon;
