import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gemini: a four-pointed star, its small twin the mark. From the files set. */
export const GeminiAiIcon: Icon = {
  name: "GeminiAiIcon",
  node: [
    ["path", { d: "M11 6c.75 4.5 2.5 6.25 7 7-4.5.75-6.25 2.5-7 7-.75-4.5-2.5-6.25-7-7 4.5-.75 6.25-2.5 7-7Z" }],
    ["path", { d: "M18 3.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z", ...SOLID }],
  ],
};

export default GeminiAiIcon;
