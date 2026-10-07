import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Next.js: a circle with the N whose stroke runs past it, the stroke the mark. From the files set. */
export const NextIcon: Icon = {
  name: "NextIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M9 16V8M15 8v5" }],
    ["path", { d: "M9 8l7 9.2", ...SOLID_STROKE }],
  ],
};

export default NextIcon;
