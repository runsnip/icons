import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Vue: a V inside a V, the inner one the mark. From the files set. */
export const VueIcon: Icon = {
  name: "VueIcon",
  node: [
    ["path", { d: "M3.5 5 12 19.5 20.5 5" }],
    ["path", { d: "M8 5l4 7 4-7", ...SOLID_STROKE }],
  ],
};

export default VueIcon;
