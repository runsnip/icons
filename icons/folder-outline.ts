import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A folder in outline, the edge of its front the mark: FolderIcon unfilled. From the ui set. */
export const FolderOutlineIcon: Icon = {
  name: "FolderOutlineIcon",
  node: [
    ["path", { d: "M4.5 18V6A1.5 1.5 0 0 1 6 4.5h3.5l2 2.5H18A1.5 1.5 0 0 1 19.5 8.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18Z" }],
    ["path", { d: "M4.5 10h15", ...SOLID_STROKE }],
  ],
};

export default FolderOutlineIcon;
