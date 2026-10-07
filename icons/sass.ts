import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sass: a round with a thickened curling S. From the files set. */
export const SassIcon: Icon = {
  name: "SassIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M15 8.5c-1.5-1.2-4.5-1.2-5.5.3-1 1.6 1 2.7 2.7 3.3 1.8.7 3 1.8 2 3.4-1 1.5-4 1.4-5.7-.2", ...SOLID_STROKE }],
  ],
};

export default SassIcon;
