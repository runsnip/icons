import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Odin: a ring crossed by a stroke, the stroke the mark. From the files set. */
export const OdinIcon: Icon = {
  name: "OdinIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 6.5 }],
    ["path", { d: "M5 19 19 5", ...SOLID_STROKE }],
  ],
};

export default OdinIcon;
