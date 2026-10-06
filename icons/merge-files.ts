import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two documents joining into one. From the pdf set. */
export const MergeFilesIcon: Icon = {
  name: "MergeFilesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 4.5, height: 6.5, rx: 1 }],
    ["rect", { x: 3.5, y: 14, width: 4.5, height: 6.5, rx: 1 }],
    ["path", { d: "M10 12h3M10.5 9.5 13 12l-2.5 2.5", ...SOLID_STROKE }],
    ["rect", { x: 15.5, y: 5.5, width: 5, height: 13, rx: 1.5 }],
  ],
};

export default MergeFilesIcon;
