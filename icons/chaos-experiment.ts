import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A chaos experiment (Steadybit and the like): a system's frame, a fault spike the mark. From the files set. */
export const ChaosExperimentIcon: Icon = {
  name: "ChaosExperimentIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M6.5 12.5h3l1.5-4 2 7 1.5-3h3", ...SOLID_STROKE }],
  ],
};

export default ChaosExperimentIcon;
