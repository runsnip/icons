import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Reply: a curved arrow back. From the collab set. */
export const ReplyIcon: Icon = {
  name: "ReplyIcon",
  node: [
    ["path", { d: "M6 10h6a7.5 7.5 0 0 1 7.5 7.5v2" }],
    ["path", { d: "M10.5 5.5 6 10l4.5 4.5", ...SOLID_STROKE }],
  ],
};

export default ReplyIcon;
