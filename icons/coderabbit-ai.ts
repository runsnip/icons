import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** CodeRabbit: a rabbit's head, its ears the mark. From the files set. */
export const CoderabbitAiIcon: Icon = {
  name: "CoderabbitAiIcon",
  node: [
    ["circle", { cx: 12, cy: 15, r: 5.5 }],
    ["path", { d: "M10 9.8 8.5 4M14 9.8 15.5 4", ...SOLID_STROKE }],
  ],
};

export default CoderabbitAiIcon;
