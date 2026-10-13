import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Continuous view: pages one under the other, scrolled through, the scroll bar's thumb the mark. From the pdf set. */
export const ViewContinuousIcon: Icon = {
  name: "ViewContinuousIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 10, height: 7.5, rx: 1.5 }],
    ["rect", { x: 4.5, y: 13, width: 10, height: 7.5, rx: 1.5 }],
    ["path", { d: "M19.5 7v5.5", ...SOLID_STROKE }],
  ],
};

export default ViewContinuousIcon;
