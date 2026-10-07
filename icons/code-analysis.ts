import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Static code analysis: a lens over a passing check, the check the mark. From the files set. */
export const CodeAnalysisIcon: Icon = {
  name: "CodeAnalysisIcon",
  node: [
    ["circle", { cx: 10.5, cy: 10.5, r: 6.5 }],
    ["path", { d: "M15.5 15.5l5 5" }],
    ["path", { d: "M7.75 10.75l2 2 3.5-4", ...SOLID_STROKE }],
  ],
};

export default CodeAnalysisIcon;
