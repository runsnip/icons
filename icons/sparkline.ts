import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A small line in a cell. From the sheets set. */
export const SparklineIcon: Icon = {
  name: "SparklineIcon",
  node: [
    ["rect", { x: 3.5, y: 5.5, width: 17, height: 13, rx: 2 }],
    ["path", { d: "M6.5 14.5l3-4 3 2.5 5-5", ...SOLID_STROKE }],
  ],
};

export default SparklineIcon;
