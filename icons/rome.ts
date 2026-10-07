import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rome: two arches on a thickened base. From the files set. */
export const RomeIcon: Icon = {
  name: "RomeIcon",
  node: [
    ["path", { d: "M3.5 5h17M5 19.5V12a3 3 0 0 1 6 0v7.5M13 19.5V12a3 3 0 0 1 6 0v7.5" }],
    ["path", { d: "M3.5 19.5h17", ...SOLID_STROKE }],
  ],
};

export default RomeIcon;
