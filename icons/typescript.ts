import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TypeScript: the letters TS in a squared frame, the letters the mark. From the files set. */
export const TypescriptIcon: Icon = {
  name: "TypescriptIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 11.5h5M9 11.5v6M17.5 12.3a2.2 2.2 0 0 0-1.8-.8c-1.1 0-1.9.6-1.9 1.5 0 2.1 3.9 1.1 3.9 3.3 0 .9-.9 1.7-2 1.7-.9 0-1.6-.4-2-1", ...SOLID_STROKE }],
  ],
};

export default TypescriptIcon;
