import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A statistics program: axes and a thickened bell curve. From the files set. */
export const StatisticsIcon: Icon = {
  name: "StatisticsIcon",
  node: [
    ["path", { d: "M4.5 3.5v16h16" }],
    ["path", { d: "M7.5 15.5c2.5 0 3-8.5 5.5-8.5s3 8.5 5.5 8.5", ...SOLID_STROKE }],
  ],
};

export default StatisticsIcon;
