import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two documents side by side with arrows. From the pdf set. */
export const CompareIcon: Icon = {
  name: "CompareIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 6.5, height: 9.5, rx: 1.5 }],
    ["rect", { x: 14, y: 3.5, width: 6.5, height: 9.5, rx: 1.5 }],
    ["path", { d: "M6 18h12M8 16l-2 2 2 2M16 16l2 2-2 2", ...SOLID_STROKE }],
  ],
};

export default CompareIcon;
