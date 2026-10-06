import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Folders in outline, the front folder's edge the mark: FoldersIcon unfilled. From the ui set. */
export const FoldersOutlineIcon: Icon = {
  name: "FoldersOutlineIcon",
  node: [
    ["path", { d: "M9 7.5V5.5a1 1 0 0 1 1-1h3l1.5 1.5h5a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-1" }],
    ["path", { d: "M4.5 19.5v-9a1 1 0 0 1 1-1H8l1.5 1.5h5a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1Z" }],
    ["path", { d: "M4.5 13h11", ...SOLID_STROKE }],
  ],
};

export default FoldersOutlineIcon;
