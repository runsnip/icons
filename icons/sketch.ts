import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sketch: a diamond, its girdle thickened. From the files set. */
export const SketchIcon: Icon = {
  name: "SketchIcon",
  node: [
    ["path", { d: "M7 4.5h10l3.5 5L12 20 3.5 9.5ZM7 4.5l5 15.5 5-15.5" }],
    ["path", { d: "M3.5 9.5h17", ...SOLID_STROKE }],
  ],
};

export default SketchIcon;
