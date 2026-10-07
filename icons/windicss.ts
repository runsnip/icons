import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Windi CSS: two gusts of wind, the upper one the mark. From the files set. */
export const WindicssIcon: Icon = {
  name: "WindicssIcon",
  node: [
    ["path", { d: "M3.5 13.5h14a3 3 0 1 1-3 3" }],
    ["path", { d: "M3.5 9.5H15a3 3 0 1 0-3-3", ...SOLID_STROKE }],
  ],
};

export default WindicssIcon;
