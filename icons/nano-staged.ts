import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** nano-staged: stacked files with the plus of staging, the plus the mark. From the files set. */
export const NanoStagedIcon: Icon = {
  name: "NanoStagedIcon",
  node: [
    ["path", { d: "M7.5 8V5.5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
    ["rect", { x: 3.5, y: 8, width: 13, height: 12.5, rx: 2 }],
    ["path", { d: "M10 11.5v5.5M7.25 14.25h5.5", ...SOLID_STROKE }],
  ],
};

export default NanoStagedIcon;
