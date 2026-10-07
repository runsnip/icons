import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The Unlicense: a C in a circle, struck through, the stroke the mark. From the files set. */
export const UnlicenseIcon: Icon = {
  name: "UnlicenseIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M14.5 9.5a3.5 3.5 0 1 0 0 5" }],
    ["path", { d: "M6 6l12 12", ...SOLID_STROKE }],
  ],
};

export default UnlicenseIcon;
