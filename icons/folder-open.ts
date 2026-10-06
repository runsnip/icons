import type { Icon } from "../types";
import { SOLID } from "../system";

/** Open: a folder with its front tipped open. From the insert set. */
export const FolderOpenIcon: Icon = {
  name: "FolderOpenIcon",
  node: [
    ["path", { d: "M3.5 17V6A1.5 1.5 0 0 1 5 4.5h4.5l2 2.5H17a1.5 1.5 0 0 1 1.5 1.5V10" }],
    ["path", { d: "M7 11.5h13.5l-3 8H3.5Z", ...SOLID }],
  ],
};

export default FolderOpenIcon;
