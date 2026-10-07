import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Gemini protocol: the twins' sign, its two pillars the mark. From the files set. */
export const GeminiIcon: Icon = {
  name: "GeminiIcon",
  node: [
    ["path", { d: "M4.5 4.5c4.5 2 10.5 2 15 0M4.5 19.5c4.5-2 10.5-2 15 0" }],
    ["path", { d: "M9 6.3v11.4M15 6.3v11.4", ...SOLID_STROKE }],
  ],
};

export default GeminiIcon;
