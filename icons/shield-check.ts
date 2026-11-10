import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Protected and verified: a shield holding a tick, the tick the mark. From the ui set. */
export const ShieldCheckIcon: Icon = {
  name: "ShieldCheckIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 6.5V12c0 4.5-3.2 7.3-7.5 8.5C7.7 19.3 4.5 16.5 4.5 12V6.5Z" }],
    ["path", { d: "M8.5 12.25 11 14.75 15.5 9.75", ...SOLID_STROKE }],
  ],
};

export default ShieldCheckIcon;
