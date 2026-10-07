import type { Icon } from "../types";
import { SOLID } from "../system";

/** PostCSS: a triangle in a circle, the point at its heart the mark. From the files set. */
export const PostcssIcon: Icon = {
  name: "PostcssIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["polygon", { points: "12,5.5 18,16 6,16" }],
    ["circle", { cx: 12, cy: 12.5, r: 1.8, ...SOLID }],
  ],
};

export default PostcssIcon;
