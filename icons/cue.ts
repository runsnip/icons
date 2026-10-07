import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** CUE: the letter C, unification's equals the mark. From the files set. */
export const CueIcon: Icon = {
  name: "CueIcon",
  node: [
    ["path", { d: "M12.9 8.1A5.5 5.5 0 1 0 12.9 15.9" }],
    ["path", { d: "M15 10h5M15 14h5", ...SOLID_STROKE }],
  ],
};

export default CueIcon;
