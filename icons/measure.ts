import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A ruler with a measured span. From the pdf set. */
export const MeasureIcon: Icon = {
  name: "MeasureIcon",
  node: [
    ["rect", { x: 3.5, y: 13, width: 17, height: 7, rx: 1.5 }],
    ["path", { d: "M8 13v3M12 13v3M16 13v3" }],
    ["path", { d: "M4.5 4.5v5M19.5 4.5v5" }],
    ["path", { d: "M7.5 7h9", ...SOLID_STROKE }],
  ],
};

export default MeasureIcon;
