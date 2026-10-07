import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A distribution: a tray, what ships out of it the mark. From the files set. */
export const DistIcon: Icon = {
  name: "DistIcon",
  node: [
    ["path", { d: "M3.5 13.5v5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5M12 15V4.5" }],
    ["path", { d: "M8 8.5l4-4 4 4", ...SOLID_STROKE }],
  ],
};

export default DistIcon;
