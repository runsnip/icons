import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Turborepo: an open ring round a thick inner ring. From the files set. */
export const TurborepoIcon: Icon = {
  name: "TurborepoIcon",
  node: [
    ["path", { d: "M12 3.5a8.5 8.5 0 1 1-8.5 8.5" }],
    ["circle", { cx: 12, cy: 12, r: 3.5, ...SOLID_STROKE }],
  ],
};

export default TurborepoIcon;
