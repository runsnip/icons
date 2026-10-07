import type { Icon } from "../types";
import { SOLID } from "../system";

/** Development: code's angle brackets round a solid point of work. From the files set. */
export const DevelopmentIcon: Icon = {
  name: "DevelopmentIcon",
  node: [
    ["path", { d: "M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5" }],
    ["circle", { cx: 12, cy: 12, r: 2, ...SOLID }],
  ],
};

export default DevelopmentIcon;
