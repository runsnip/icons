import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** MXML: markup's angle brackets with an M between them, the M the mark. From the files set. */
export const MxmlIcon: Icon = {
  name: "MxmlIcon",
  node: [
    ["path", { d: "M7 7.5 3.5 12 7 16.5M17 7.5l3.5 4.5-3.5 4.5" }],
    ["path", { d: "M9.5 15V9l2.5 3 2.5-3v6", ...SOLID_STROKE }],
  ],
};

export default MxmlIcon;
