import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** HCL: braces round an assignment, the = the mark. From the files set. */
export const HclIcon: Icon = {
  name: "HclIcon",
  node: [
    ["path", { d: "M7 4.5H6.5A2 2 0 0 0 4.5 6.5v3.5L3.5 12l1 2v3.5a2 2 0 0 0 2 2H7M17 4.5h.5a2 2 0 0 1 2 2v3.5l1 2-1 2v3.5a2 2 0 0 1-2 2H17" }],
    ["path", { d: "M9 10h6M9 14h6", ...SOLID_STROKE }],
  ],
};

export default HclIcon;
