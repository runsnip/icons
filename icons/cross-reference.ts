import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A cross-reference: text whose last line turns back up to a place above, the arrow's head the mark. From the insert set. */
export const CrossReferenceIcon: Icon = {
  name: "CrossReferenceIcon",
  node: [
    ["path", { d: "M3.5 5h8M3.5 10h8M3.5 15h8M3.5 19.5h11a3 3 0 0 0 3-3V5.5" }],
    ["path", { d: "M15 7.5l2.5-2.5 2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default CrossReferenceIcon;
