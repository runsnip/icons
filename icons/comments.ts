import type { Icon } from "../types";
import { SOLID } from "../system";

/** Comments, a conversation: two speech bubbles. From the collab set. */
export const CommentsIcon: Icon = {
  name: "CommentsIcon",
  node: [
    ["path", { d: "M7.5 13H6.5L3.5 15.5V6A2.5 2.5 0 0 1 6 3.5H13.5A2.5 2.5 0 0 1 16 6V7.5" }],
    ["path", { d: "M10.5 12.5A2.5 2.5 0 0 1 13 10H18A2.5 2.5 0 0 1 20.5 12.5V20.5L17.5 18H13A2.5 2.5 0 0 1 10.5 15.5Z", ...SOLID }],
  ],
};

export default CommentsIcon;
