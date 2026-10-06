import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Margins: a page with its text area's edges as guides, an arrow across the left margin. From the insert set. */
export const MarginsIcon: Icon = {
  name: "MarginsIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["rect", { x: 13, y: 7.5, width: 4.5, height: 9, "stroke-dasharray": "0 3" }],
    ["path", { d: "M5.5 12h5M8 9.5l2.5 2.5L8 14.5", ...SOLID_STROKE }],
  ],
};

export default MarginsIcon;
