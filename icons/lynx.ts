import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Lynx: a lynx's head, the tufts of its ears the mark. From the files set. */
export const LynxIcon: Icon = {
  name: "LynxIcon",
  node: [
    ["path", { d: "M4.5 13.5 6 8l4 2.5h4L18 8l1.5 5.5-2 4-5.5 3-5.5-3Z" }],
    ["path", { d: "M6 8 5.5 4M18 8l.5-4", ...SOLID_STROKE }],
  ],
};

export default LynxIcon;
