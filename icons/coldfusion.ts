import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** ColdFusion: the letters Cf, the mark, in a square. From the files set. */
export const ColdfusionIcon: Icon = {
  name: "ColdfusionIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M11.5 9.63A3.5 3.5 0 1 0 11.5 15.37M17 8.5h-.5a1.5 1.5 0 0 0-1.5 1.5v6.5M13.5 12h3", ...SOLID_STROKE }],
  ],
};

export default ColdfusionIcon;
