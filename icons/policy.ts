import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Policies: a shield, the tick of a rule met the mark. From the files set. */
export const PolicyIcon: Icon = {
  name: "PolicyIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 6.5V12c0 4.5-3.2 7.3-7.5 8.5C7.7 19.3 4.5 16.5 4.5 12V6.5Z" }],
    ["path", { d: "M8.5 12l2.5 2.5 4.5-5", ...SOLID_STROKE }],
  ],
};

export default PolicyIcon;
