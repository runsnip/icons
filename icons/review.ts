import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Review: a comment with a thickened tick in it. From the files set. */
export const ReviewIcon: Icon = {
  name: "ReviewIcon",
  node: [
    ["path", { d: "M4.5 18.5v-12a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-3.5 3Z" }],
    ["path", { d: "M8.5 10.5 11 13l4.5-4.5", ...SOLID_STROKE }],
  ],
};

export default ReviewIcon;
