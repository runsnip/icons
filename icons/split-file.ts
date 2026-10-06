import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** One document dividing into two. From the pdf set. */
export const SplitFileIcon: Icon = {
  name: "SplitFileIcon",
  node: [
    ["rect", { x: 3.5, y: 5.5, width: 5, height: 13, rx: 1.5 }],
    ["path", { d: "M10.5 12h3M11 9.5l2.5 2.5-2.5 2.5", ...SOLID_STROKE }],
    ["rect", { x: 16, y: 3.5, width: 4.5, height: 6.5, rx: 1 }],
    ["rect", { x: 16, y: 14, width: 4.5, height: 6.5, rx: 1 }],
  ],
};

export default SplitFileIcon;
