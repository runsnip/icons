import type { Icon } from "../types";
import { SOLID } from "../system";

/** A padlock in outline, its keyhole the mark: LockIcon unfilled. From the ui set. */
export const LockOutlineIcon: Icon = {
  name: "LockOutlineIcon",
  node: [
    ["path", { d: "M8 11.5V8a4 4 0 0 1 8 0v3.5" }],
    ["rect", { x: 5.5, y: 11.5, width: 13, height: 8, rx: 2 }],
    ["circle", { cx: 12, cy: 15.5, r: 1.5, ...SOLID }],
  ],
};

export default LockOutlineIcon;
