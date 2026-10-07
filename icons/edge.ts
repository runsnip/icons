import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Edge templates: a tag's braces, the double bar inside them the mark. From the files set. */
export const EdgeIcon: Icon = {
  name: "EdgeIcon",
  node: [
    ["path", { d: "M7 4.5H6.5A1.5 1.5 0 0 0 5 6V10.5L3.5 12L5 13.5V18A1.5 1.5 0 0 0 6.5 19.5H7M17 4.5H17.5A1.5 1.5 0 0 1 19 6V10.5L20.5 12L19 13.5V18A1.5 1.5 0 0 1 17.5 19.5H17" }],
    ["path", { d: "M10.25 9v6M13.75 9v6", ...SOLID_STROKE }],
  ],
};

export default EdgeIcon;
