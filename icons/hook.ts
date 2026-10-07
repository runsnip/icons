import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Hooks: a fishing hook, its barb the mark. From the files set. */
export const HookIcon: Icon = {
  name: "HookIcon",
  node: [
    ["circle", { cx: 15.5, cy: 6, r: 2 }],
    ["path", { d: "M15.5 8v7a4.5 4.5 0 0 1-9 0" }],
    ["path", { d: "M6.5 15v-4l2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default HookIcon;
