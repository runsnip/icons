import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cap'n Proto: a captain's cap, its visor the mark. From the files set. */
export const CapnpIcon: Icon = {
  name: "CapnpIcon",
  node: [
    ["path", { d: "M5.5 14 4 8.5c3.5-3 12.5-3 16 0L18.5 14Z" }],
    ["path", { d: "M5.5 17.5c4-2 9-2 13 0", ...SOLID_STROKE }],
  ],
};

export default CapnpIcon;
