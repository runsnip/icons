import type { Icon } from "../types";
import { SOLID } from "../system";

/** Continuous integration (Travis CI and the like): an endless loop, its arrowhead the mark. From the files set. */
export const CiPipelineIcon: Icon = {
  name: "CiPipelineIcon",
  node: [
    ["path", { d: "M12 12c-1.6-2.1-2.8-3.25-4.5-3.25a3.25 3.25 0 0 0 0 6.5c1.7 0 2.9-1.15 4.5-3.25s2.8-3.25 4.5-3.25a3.25 3.25 0 0 1 0 6.5c-1.7 0-2.9-1.15-4.5-3.25" }],
    ["polygon", { points: "15.5,5.75 19,8.75 15.5,11.75", ...SOLID }],
  ],
};

export default CiPipelineIcon;
