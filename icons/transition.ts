import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two slides with an arrow passing between. From the slides set. */
export const TransitionIcon: Icon = {
  name: "TransitionIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 10, height: 7.5, rx: 1.5 }],
    ["rect", { x: 10.5, y: 13, width: 10, height: 7.5, rx: 1.5 }],
    ["path", { d: "M17.5 4.5V11M15.25 8.75l2.25 2.25 2.25-2.25", ...SOLID_STROKE }],
  ],
};

export default TransitionIcon;
