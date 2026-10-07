import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Lefthook: a hook thrown from the left, its barb the mark. From the files set. */
export const LefthookIcon: Icon = {
  name: "LefthookIcon",
  node: [
    ["circle", { cx: 8.5, cy: 6, r: 2 }],
    ["path", { d: "M8.5 8v7a4.5 4.5 0 0 0 9 0" }],
    ["path", { d: "M17.5 15v-4L15 13.5", ...SOLID_STROKE }],
  ],
};

export default LefthookIcon;
