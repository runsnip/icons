import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Flow: three flowing lines, the middle one the mark. From the files set. */
export const FlowIcon: Icon = {
  name: "FlowIcon",
  node: [
    ["path", { d: "M4.5 7c2.5-2 5-2 7.5 0s5 2 7.5 0M4.5 17c2.5-2 5-2 7.5 0s5 2 7.5 0" }],
    ["path", { d: "M4.5 12c2.5-2 5-2 7.5 0s5 2 7.5 0", ...SOLID_STROKE }],
  ],
};

export default FlowIcon;
