import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Silverstripe: two links of an S, their join the mark. From the files set. */
export const SilverstripeIcon: Icon = {
  name: "SilverstripeIcon",
  node: [
    ["path", { d: "M9.5 15.5 6 12a3 3 0 0 1 0-4.25 3 3 0 0 1 4.25 0L11.5 9" }],
    ["path", { d: "M14.5 8.5 18 12a3 3 0 0 1 0 4.25 3 3 0 0 1-4.25 0L12.5 15" }],
    ["path", { d: "M10 14l4-4", ...SOLID_STROKE }],
  ],
};

export default SilverstripeIcon;
