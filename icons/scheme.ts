import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Scheme: a thickened lambda in a square. From the files set. */
export const SchemeIcon: Icon = {
  name: "SchemeIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8 6.5h2l5.5 11M12.6 11.5 8.5 17.5", ...SOLID_STROKE }],
  ],
};

export default SchemeIcon;
