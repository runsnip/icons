import type { Icon } from "../types";
import { SOLID } from "../system";

/** An open padlock in outline, its keyhole the mark: UnlockIcon unfilled. From the ui set. */
export const UnlockOutlineIcon: Icon = {
  name: "UnlockOutlineIcon",
  node: [
    ["path", { d: "M8 11.5V8a4 4 0 0 1 7.6-1.7" }],
    ["rect", { x: 5.5, y: 11.5, width: 13, height: 8, rx: 2 }],
    ["circle", { cx: 12, cy: 15.5, r: 1.5, ...SOLID }],
  ],
};

export default UnlockOutlineIcon;
