import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PowerShell: its slanted window, the prompt's chevron the mark. From the files set. */
export const PowershellIcon: Icon = {
  name: "PowershellIcon",
  node: [
    ["path", { d: "M7 4.5h13.5L17 19.5H3.5Z" }],
    ["path", { d: "M12.5 15.5h3" }],
    ["path", { d: "M8.5 9l3.5 3-4 3", ...SOLID_STROKE }],
  ],
};

export default PowershellIcon;
