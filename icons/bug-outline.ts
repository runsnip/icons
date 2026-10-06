import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A bug in outline, the seam of its wings the mark: BugIcon unfilled. From the ui set. */
export const BugOutlineIcon: Icon = {
  name: "BugOutlineIcon",
  node: [
    ["rect", { x: 7.5, y: 7.5, width: 9, height: 13, rx: 4.5 }],
    ["path", { d: "M3.5 13.5h4M16.5 13.5h4M4.5 8.5l3 2M19.5 8.5l-3 2M4.5 19l3-2M19.5 19l-3-2M9.5 5 8 3.5M14.5 5 16 3.5" }],
    ["path", { d: "M12 11.5v6", ...SOLID_STROKE }],
  ],
};

export default BugOutlineIcon;
