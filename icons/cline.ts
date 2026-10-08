import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cline: a robot's head with ears, its eyes the mark. From the files set. */
export const ClineIcon: Icon = {
  name: "ClineIcon",
  node: [
    ["rect", { x: 6, y: 7.5, width: 12, height: 11, rx: 4 }],
    ["path", { d: "M12 7.5V4.5M3.5 11.5v3M20.5 11.5v3" }],
    ["path", { d: "M10 11.5v3M14 11.5v3", ...SOLID_STROKE }],
  ],
};

export default ClineIcon;
