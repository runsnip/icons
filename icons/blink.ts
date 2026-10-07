import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Blink: a closed eyelid, its lashes the mark. From the files set. */
export const BlinkIcon: Icon = {
  name: "BlinkIcon",
  node: [
    ["path", { d: "M4 10c4 5 12 5 16 0" }],
    ["path", { d: "M12 14.5v3.5M7.5 13.2 6 16M16.5 13.2 18 16", ...SOLID_STROKE }],
  ],
};

export default BlinkIcon;
