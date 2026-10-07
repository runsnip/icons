import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Less: braces around its L, the L the mark. From the files set. */
export const LessIcon: Icon = {
  name: "LessIcon",
  node: [
    ["path", { d: "M7.5 4.5h-1a2 2 0 0 0-2 2V10l-1 2 1 2v3.5a2 2 0 0 0 2 2h1M16.5 4.5h1a2 2 0 0 1 2 2V10l1 2-1 2v3.5a2 2 0 0 1-2 2h-1" }],
    ["path", { d: "M10 8v8h4.5", ...SOLID_STROKE }],
  ],
};

export default LessIcon;
