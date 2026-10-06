import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Fit width: a narrow page with arrows pushing out to either side. From the insert set. */
export const FitWidthIcon: Icon = {
  name: "FitWidthIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 17, rx: 1.5 }],
    ["path", { d: "M3.5 12H7M17 12h3.5" }],
    ["path", { d: "M5.5 9.5 3.5 12l2 2.5M18.5 9.5l2 2.5-2 2.5", ...SOLID_STROKE }],
  ],
};

export default FitWidthIcon;
