import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Different first page: a page whose header is apart, a 1 on it. From the insert set. */
export const DifferentFirstPageIcon: Icon = {
  name: "DifferentFirstPageIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M4.5 8h15" }],
    ["path", { d: "M11 13.5l2-1.5v6.5", ...SOLID_STROKE }],
  ],
};

export default DifferentFirstPageIcon;
