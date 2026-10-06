import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** .00 → .0. From the sheets set. */
export const DecimalDecreaseIcon: Icon = {
  name: "DecimalDecreaseIcon",
  node: [
    ["path", { d: "M4.5 12h0" }],
    ["ellipse", { cx: 9.5, cy: 8.5, rx: 2.3, ry: 3.8 }],
    ["path", { d: "M19.5 18h-15" }],
    ["path", { d: "M7.5 15.5 5 18l2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default DecimalDecreaseIcon;
