import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A caption: a figure, and the line that names it under it. From the insert set. */
export const InsertCaptionIcon: Icon = {
  name: "InsertCaptionIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 11, rx: 2 }],
    ["path", { d: "M7 11.5l3-3 2.5 2.5 1.5-1.5 3 2.5" }],
    ["path", { d: "M7 18.5h10", ...SOLID_STROKE }],
  ],
};

export default InsertCaptionIcon;
