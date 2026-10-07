import type { Icon } from "../types";
import { SOLID } from "../system";

/** Stylable: style braces, a jewel between them the mark. From the files set. */
export const StylableIcon: Icon = {
  name: "StylableIcon",
  node: [
    ["path", { d: "M8 4.5c-2 0-2.5 1-2.5 2.5v2.5c0 1.5-1 3-2 3 1 0 2 1.5 2 3v2.5c0 1.5.5 2.5 2.5 2.5" }],
    ["path", { d: "M16 4.5c2 0 2.5 1 2.5 2.5v2.5c0 1.5 1 3 2 3-1 0-2 1.5-2 3v2.5c0 1.5-.5 2.5-2.5 2.5" }],
    ["polygon", { points: "12,8.5 15.5,12 12,15.5 8.5,12", ...SOLID }],
  ],
};

export default StylableIcon;
