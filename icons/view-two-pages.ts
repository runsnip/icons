import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Two-page view: two pages side by side, their top lines marking them. From the pdf set. */
export const ViewTwoPagesIcon: Icon = {
  name: "ViewTwoPagesIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 7.5, height: 15, rx: 2 }],
    ["rect", { x: 13, y: 4.5, width: 7.5, height: 15, rx: 2 }],
    ["path", { d: "M5.75 8h3M15.25 8h3", ...SOLID_STROKE }],
  ],
};

export default ViewTwoPagesIcon;
