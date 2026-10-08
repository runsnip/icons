import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Packship: a P with its tail, the stem the mark. From the files set. */
export const PackshipIcon: Icon = {
  name: "PackshipIcon",
  node: [
    ["path", { d: "M9 6.5h4a4 4 0 0 1 0 8H9" }],
    ["path", { d: "M9 4.5V20.5", ...SOLID_STROKE }],
  ],
};

export default PackshipIcon;
