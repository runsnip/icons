import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** R: the letter R before its ring, the letter the mark. From the files set. */
export const RIcon: Icon = {
  name: "RIcon",
  node: [
    ["ellipse", { cx: 11.5, cy: 10.5, rx: 8, ry: 6 }],
    ["path", { d: "M11 20v-10h4.5a2.5 2.5 0 0 1 0 5H11M15 15l3.5 5", ...SOLID_STROKE }],
  ],
};

export default RIcon;
