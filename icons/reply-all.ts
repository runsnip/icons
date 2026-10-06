import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Reply to all: two arrowheads on one curved arrow back. From the collab set. */
export const ReplyAllIcon: Icon = {
  name: "ReplyAllIcon",
  node: [
    ["path", { d: "M9 10h4a7 7 0 0 1 7 7v2.5" }],
    ["path", { d: "M8.5 5.5 4 10l4.5 4.5M13 5.5 8.5 10l4.5 4.5", ...SOLID_STROKE }],
  ],
};

export default ReplyAllIcon;
