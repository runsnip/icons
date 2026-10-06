import type { Icon } from "../types";
import { SOLID } from "../system";

/** Three boxes evenly spaced across. From the slides set. */
export const DistributeHorizontalIcon: Icon = {
  name: "DistributeHorizontalIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 3.5, height: 14, rx: 1.5 }],
    ["rect", { x: 10.25, y: 7.5, width: 3.5, height: 9, rx: 1, ...SOLID }],
    ["rect", { x: 17, y: 5, width: 3.5, height: 14, rx: 1.5 }],
  ],
};

export default DistributeHorizontalIcon;
