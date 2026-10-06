import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sparkles in outline, the small one the mark: SparklesIcon unfilled. From the ui set. */
export const SparklesOutlineIcon: Icon = {
  name: "SparklesOutlineIcon",
  node: [
    ["path", { d: "M11 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z" }],
    ["path", { d: "M18 15.5v5M15.5 18h5", ...SOLID_STROKE }],
  ],
};

export default SparklesOutlineIcon;
