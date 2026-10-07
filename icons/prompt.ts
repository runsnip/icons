import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A prompt for a model: a speech bubble, the prompt's chevron the mark. From the files set. */
export const PromptIcon: Icon = {
  name: "PromptIcon",
  node: [
    ["path", { d: "M6 3.5h12A2.5 2.5 0 0 1 20.5 6v8.5A2.5 2.5 0 0 1 18 17h-8l-4.5 3.5V17H6a2.5 2.5 0 0 1-2.5-2.5V6A2.5 2.5 0 0 1 6 3.5Z" }],
    ["path", { d: "M12.5 13h3.5" }],
    ["path", { d: "M8 7.5l3 2.75-3 2.75", ...SOLID_STROKE }],
  ],
};

export default PromptIcon;
