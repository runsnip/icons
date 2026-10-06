import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Add a comment: a speech bubble with a plus. From the collab set. */
export const CommentAddIcon: Icon = {
  name: "CommentAddIcon",
  node: [
    ["path", { d: "M3.5 6A2.5 2.5 0 0 1 6 3.5H18A2.5 2.5 0 0 1 20.5 6V14A2.5 2.5 0 0 1 18 16.5H10L5.5 20.5V16.5A2 2 0 0 1 3.5 14.5Z" }],
    ["path", { d: "M12 7v6M9 10h6", ...SOLID_STROKE }],
  ],
};

export default CommentAddIcon;
