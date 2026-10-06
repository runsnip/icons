import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Landscape: a wide page, its top line marking which way is up. From the insert set. */
export const LandscapePageIcon: Icon = {
  name: "LandscapePageIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2 }],
    ["path", { d: "M7 10h10", ...SOLID_STROKE }],
    ["path", { d: "M7 14h7" }],
  ],
};

export default LandscapePageIcon;
