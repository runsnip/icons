import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TypeScript declarations: the letters TS in a frame, underlined as a definition, the rule the mark. From the files set. */
export const TypescriptDefIcon: Icon = {
  name: "TypescriptDefIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 7.5h5M9 7.5v5.5M17.5 8.2a2.1 2.1 0 0 0-1.7-.7c-1 0-1.8.5-1.8 1.4 0 1.9 3.6 1 3.6 3 0 .8-.8 1.6-1.9 1.6-.8 0-1.5-.4-1.9-.9" }],
    ["path", { d: "M6.5 16.5h11", ...SOLID_STROKE }],
  ],
};

export default TypescriptDefIcon;
