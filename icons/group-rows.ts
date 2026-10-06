import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rows bracketed with a minus (outline group). From the sheets set. */
export const GroupRowsIcon: Icon = {
  name: "GroupRowsIcon",
  node: [
    ["path", { d: "M11 5.5h9.5M11 12h9.5M11 18.5h9.5M5.75 9.5v9h2.5" }],
    ["path", { d: "M3.5 5.5h4.5", ...SOLID_STROKE }],
  ],
};

export default GroupRowsIcon;
