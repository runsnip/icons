import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** IntelliJ IDEA: the letters IJ over the bar in a square, the bar the mark. From the files set. */
export const IntellijIcon: Icon = {
  name: "IntellijIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M8 7.5v6M16 7.5v4.5a2.5 2.5 0 0 1-5 0" }],
    ["path", { d: "M7.5 17h6", ...SOLID_STROKE }],
  ],
};

export default IntellijIcon;
