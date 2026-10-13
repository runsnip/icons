import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Two-page view with a cover: one page alone, then two side by side. From the pdf set. */
export const ViewTwoPagesCoverIcon: Icon = {
  name: "ViewTwoPagesCoverIcon",
  node: [
    ["rect", { x: 8, y: 3.5, width: 8, height: 7, rx: 1.5 }],
    ["rect", { x: 3.5, y: 13.5, width: 7.5, height: 7, rx: 1.5 }],
    ["rect", { x: 13, y: 13.5, width: 7.5, height: 7, rx: 1.5 }],
    ["path", { d: "M10.5 7h3", ...SOLID_STROKE }],
  ],
};

export default ViewTwoPagesCoverIcon;
