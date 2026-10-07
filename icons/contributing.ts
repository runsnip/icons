import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Contributing: a change offered back to a branch, its arrow the mark. From the files set. */
export const ContributingIcon: Icon = {
  name: "ContributingIcon",
  node: [
    ["circle", { cx: 7, cy: 6, r: 2.5 }],
    ["circle", { cx: 7, cy: 18, r: 2.5 }],
    ["circle", { cx: 17, cy: 18, r: 2.5 }],
    ["path", { d: "M7 8.5v7M17 15.5v-6a2 2 0 0 0-2-2h-3" }],
    ["path", { d: "M14 5 11.5 7.5 14 10", ...SOLID_STROKE }],
  ],
};

export default ContributingIcon;
