import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Export: an arrow leaving a box. From the insert set. */
export const ExportIcon: Icon = {
  name: "ExportIcon",
  node: [
    ["rect", { x: 3.5, y: 5.5, width: 11, height: 13, rx: 2 }],
    ["path", { d: "M9 12h11" }],
    ["path", { d: "M17 8.5l3.5 3.5-3.5 3.5", ...SOLID_STROKE }],
  ],
};

export default ExportIcon;
