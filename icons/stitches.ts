import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Stitches: a seam across a circle, its stitches the mark. From the files set. */
export const StitchesIcon: Icon = {
  name: "StitchesIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M7.5 16.5 16.5 7.5" }],
    ["path", { d: "M7.9 13.9l2.2 2.2M10.9 10.9l2.2 2.2M13.9 7.9l2.2 2.2", ...SOLID_STROKE }],
  ],
};

export default StitchesIcon;
