import type { Icon } from "../types";
import { SOLID } from "../system";

/** A pointer dot with a beam. From the slides set. */
export const LaserPointerIcon: Icon = {
  name: "LaserPointerIcon",
  node: [
    ["path", { d: "M4 4l7 7M15.5 9.5V11M9.5 15.5H11M20.5 15.5H19M15.5 20.5V19M19.5 11.5l-1 1M11.5 19.5l1-1" }],
    ["circle", { cx: 15.5, cy: 15.5, r: 2.5, ...SOLID }],
  ],
};

export default LaserPointerIcon;
