import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sway: three swaying lines, the middle one the mark. From the files set. */
export const SwayIcon: Icon = {
  name: "SwayIcon",
  node: [
    ["path", { d: "M3.5 6.5c2.8-2 5.7 2 8.5 0s5.7-2 8.5 0M3.5 17.5c2.8-2 5.7 2 8.5 0s5.7-2 8.5 0" }],
    ["path", { d: "M3.5 12c2.8-2 5.7 2 8.5 0s5.7-2 8.5 0", ...SOLID_STROKE }],
  ],
};

export default SwayIcon;
