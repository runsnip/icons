import type { Icon } from "../types";
import { SOLID } from "../system";

/** A CI pipeline: a stage branching into two, the first stage the mark. From the files set. */
export const BuildPipelineIcon: Icon = {
  name: "BuildPipelineIcon",
  node: [
    ["circle", { cx: 18, cy: 6, r: 2.5 }],
    ["circle", { cx: 18, cy: 18, r: 2.5 }],
    ["path", { d: "M8.5 12h2.5c2 0 2-6 4.5-6M11 12c2 0 2 6 4.5 6" }],
    ["circle", { cx: 6, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default BuildPipelineIcon;
