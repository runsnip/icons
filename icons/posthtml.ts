import type { Icon } from "../types";
import { SOLID } from "../system";

/** PostHTML: a tag's angle brackets, the transform between them the mark. From the files set. */
export const PosthtmlIcon: Icon = {
  name: "PosthtmlIcon",
  node: [
    ["path", { d: "M8 6.5 3.5 12 8 17.5M16 6.5l4.5 5.5-4.5 5.5" }],
    ["polygon", { points: "12,8.5 15.5,15 8.5,15", ...SOLID }],
  ],
};

export default PosthtmlIcon;
