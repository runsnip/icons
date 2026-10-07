import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** pre-commit hooks: a commit on its line, the gate before it the mark. From the files set. */
export const PreCommitIcon: Icon = {
  name: "PreCommitIcon",
  node: [
    ["path", { d: "M3.5 12h8M18.5 12h2" }],
    ["circle", { cx: 15, cy: 12, r: 3.5 }],
    ["path", { d: "M7.5 7.5v9", ...SOLID_STROKE }],
  ],
};

export default PreCommitIcon;
