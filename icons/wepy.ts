import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** WePY: a heavy W in a squared frame. From the files set. */
export const WepyIcon: Icon = {
  name: "WepyIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 8l2 8 3.5-6 3.5 6 2-8", ...SOLID_STROKE }],
  ],
};

export default WepyIcon;
