import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Open Policy Agent: a shield with a tick, the tick the mark. From the files set. */
export const OpaIcon: Icon = {
  name: "OpaIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 6.5v5c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9v-5Z" }],
    ["path", { d: "M8.8 12.2l2.2 2.3 4.2-4.5", ...SOLID_STROKE }],
  ],
};

export default OpaIcon;
