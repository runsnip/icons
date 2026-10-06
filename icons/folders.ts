import type { Icon } from "../types";
import { SOLID } from "../system";

/** Folders: a whole folder in front of another, the one behind showing its tab and its edge. From the ui set. */
export const FoldersIcon: Icon = {
  name: "FoldersIcon",
  node: [
    ["path", { d: "M9 7.5V5.5a1 1 0 0 1 1-1h3l1.5 1.5h5a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-1" }],
    ["path", { d: "M3.5 11.5v-1a1 1 0 0 1 1-1H7l1.5 1.5h6.5a1 1 0 0 1 1 1" }],
    ["rect", { x: 3.5, y: 12.5, width: 13, height: 8, rx: 1.5, ...SOLID }],
  ],
};

export default FoldersIcon;
