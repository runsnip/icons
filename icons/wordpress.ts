import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** WordPress: a heavy W in a circle. From the files set. */
export const WordpressIcon: Icon = {
  name: "WordpressIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M7 8.5l2.25 7.5L12 10.5l2.75 5.5L17 8.5", ...SOLID_STROKE }],
  ],
};

export default WordpressIcon;
