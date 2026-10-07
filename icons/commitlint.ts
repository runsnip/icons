import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** commitlint: a commit on its line over a tick, the tick the mark. From the files set. */
export const CommitlintIcon: Icon = {
  name: "CommitlintIcon",
  node: [
    ["path", { d: "M3.5 8h4M14.5 8h6" }],
    ["circle", { cx: 11, cy: 8, r: 3.5 }],
    ["path", { d: "M7.5 15.5 10.5 18.5 16.5 12.5", ...SOLID_STROKE }],
  ],
};

export default CommitlintIcon;
