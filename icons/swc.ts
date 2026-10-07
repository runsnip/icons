import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** SWC: two chevrons racing ahead, the leading one the mark. From the files set. */
export const SwcIcon: Icon = {
  name: "SwcIcon",
  node: [
    ["path", { d: "M5.5 6.5 11 12l-5.5 5.5" }],
    ["path", { d: "M13 6.5l5.5 5.5-5.5 5.5", ...SOLID_STROKE }],
  ],
};

export default SwcIcon;
