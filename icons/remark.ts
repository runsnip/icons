import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** remark: a markdown card, an r and the down arrow of markdown, the arrow the mark. From the files set. */
export const RemarkIcon: Icon = {
  name: "RemarkIcon",
  node: [
    ["rect", { x: 3.5, y: 5.5, width: 17, height: 13, rx: 2.5 }],
    ["path", { d: "M7.5 15.5v-6M7.5 12a3 3 0 0 1 3-2.5" }],
    ["path", { d: "M15.5 8.5v6.5M13.5 13l2 2.2 2-2.2", ...SOLID_STROKE }],
  ],
};

export default RemarkIcon;
