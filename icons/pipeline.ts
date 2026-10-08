import type { Icon } from "../types";
import { SOLID } from "../system";

/** A pipeline: stages joined, the last one the mark. From the files set. */
export const PipelineIcon: Icon = {
  name: "PipelineIcon",
  node: [
    ["circle", { cx: 6.5, cy: 6.5, r: 2.5 }],
    ["circle", { cx: 17.5, cy: 6.5, r: 2.5 }],
    ["circle", { cx: 6.5, cy: 17.5, r: 2.5 }],
    ["path", { d: "M9 6.5h6M15.7 8.3 8.3 15.7M9 17.5h5" }],
    ["rect", { x: 15, y: 15, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default PipelineIcon;
