import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Portrait: a tall page, its top line marking which way is up. From the insert set. */
export const PortraitPageIcon: Icon = {
  name: "PortraitPageIcon",
  node: [
    ["rect", { x: 6, y: 3.5, width: 12, height: 17, rx: 2 }],
    ["path", { d: "M9 8h6", ...SOLID_STROKE }],
    ["path", { d: "M9 12h6M9 15.5h4" }],
  ],
};

export default PortraitPageIcon;
