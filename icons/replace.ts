import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Replace: two arrows swapping places. From the insert set. */
export const ReplaceIcon: Icon = {
  name: "ReplaceIcon",
  node: [
    ["path", { d: "M3.5 8h16M20.5 16h-16" }],
    ["path", { d: "M16 4.5 19.5 8 16 11.5M8 12.5 4.5 16 8 19.5", ...SOLID_STROKE }],
  ],
};

export default ReplaceIcon;
