import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** lint-staged: the staged changes, checked, the tick the mark. From the files set. */
export const LintStagedIcon: Icon = {
  name: "LintStagedIcon",
  node: [
    ["rect", { x: 3.5, y: 11.5, width: 17, height: 9, rx: 2 }],
    ["path", { d: "M5.5 8h13M7.5 4.5h9" }],
    ["path", { d: "M8.5 16l2.2 2.2 4.3-4.4", ...SOLID_STROKE }],
  ],
};

export default LintStagedIcon;
