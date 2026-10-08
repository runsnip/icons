import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Otne: a ring round a capsule, its bar the mark. From the files set. */
export const OtneIcon: Icon = {
  name: "OtneIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["rect", { x: 7, y: 10.25, width: 10, height: 3.5, rx: 1.75 }],
    ["path", { d: "M12 8.5v7", ...SOLID_STROKE }],
  ],
};

export default OtneIcon;
