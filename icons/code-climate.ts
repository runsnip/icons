import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Code Climate: two peaks, the small one the mark. From the files set. */
export const CodeClimateIcon: Icon = {
  name: "CodeClimateIcon",
  node: [
    ["path", { d: "M9.5 18l5.5-10 5.5 10" }],
    ["path", { d: "M3.5 18l4-6.5 3.5 5", ...SOLID_STROKE }],
  ],
};

export default CodeClimateIcon;
