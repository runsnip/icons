import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Date and time: a calendar with a small clock. From the insert set. */
export const DateTimeIcon: Icon = {
  name: "DateTimeIcon",
  node: [
    ["path", { d: "M10 19.5H5.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V10M3.5 9.5h15" }],
    ["circle", { cx: 16, cy: 16, r: 4.5 }],
    ["path", { d: "M16 14v2l1.5 1", ...SOLID_STROKE }],
  ],
};

export default DateTimeIcon;
