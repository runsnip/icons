import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Roadmap: a timeline's bars, the current one thickened. From the files set. */
export const RoadmapIcon: Icon = {
  name: "RoadmapIcon",
  node: [
    ["path", { d: "M4.5 3.5v17M8 7h6M14 17h5.5" }],
    ["path", { d: "M11 12h7.5", ...SOLID_STROKE }],
  ],
};

export default RoadmapIcon;
