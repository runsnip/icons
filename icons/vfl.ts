import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Visual Format Language: a view held between two edges by heavy spacers. From the files set. */
export const VflIcon: Icon = {
  name: "VflIcon",
  node: [
    ["path", { d: "M3.5 6.5v11M20.5 6.5v11" }],
    ["rect", { x: 8, y: 8, width: 8, height: 8, rx: 1.5 }],
    ["path", { d: "M4 12h3.5M16.5 12H20", ...SOLID_STROKE }],
  ],
};

export default VflIcon;
