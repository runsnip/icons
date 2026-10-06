import type { Icon } from "../types";
import { SOLID } from "../system";

/** Lasso selection: a loop on a rope. From the collab set. */
export const LassoIcon: Icon = {
  name: "LassoIcon",
  node: [
    ["ellipse", { cx: 12.5, cy: 8.5, rx: 8, ry: 5 }],
    ["circle", { cx: 8, cy: 15.3, r: 2.2, ...SOLID }],
    ["path", { d: "M8 17.5c0 1.5 2.5 1.3 2.5 3" }],
  ],
};

export default LassoIcon;
