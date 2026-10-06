import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** .0 → .00. From the sheets set. */
export const DecimalIncreaseIcon: Icon = {
  name: "DecimalIncreaseIcon",
  node: [
    ["path", { d: "M4.5 12h0" }],
    ["ellipse", { cx: 9.5, cy: 8.5, rx: 2.3, ry: 3.8 }],
    ["ellipse", { cx: 16.5, cy: 8.5, rx: 2.3, ry: 3.8 }],
    ["path", { d: "M4.5 18h15" }],
    ["path", { d: "M16.5 15.5 19 18l-2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default DecimalIncreaseIcon;
