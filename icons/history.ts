import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** History: a clock with an arrow running back. From the insert set. */
export const HistoryIcon: Icon = {
  name: "HistoryIcon",
  node: [
    ["path", { d: "M4.5 12a7.5 7.5 0 1 0 2.2-5.3M12 8v4l2.5 2" }],
    ["path", { d: "M4.5 4.5V9H9", ...SOLID_STROKE }],
  ],
};

export default HistoryIcon;
