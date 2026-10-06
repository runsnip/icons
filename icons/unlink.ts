import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Unlink: a chain link broken in two. From the insert set. */
export const UnlinkIcon: Icon = {
  name: "UnlinkIcon",
  node: [
    ["path", { d: "M11.5 9 14 6.5a3.2 3.2 0 0 1 4.5 4.5L16 13.5M12.5 15 10 17.5a3.2 3.2 0 0 1-4.5-4.5L8 10.5" }],
    ["path", { d: "M8.5 3.5v2.5M3.5 8.5H6M15.5 20.5V18M20.5 15.5H18", ...SOLID_STROKE }],
  ],
};

export default UnlinkIcon;
