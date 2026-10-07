import type { Icon } from "../types";
import { SOLID } from "../system";

/** A build target: rings, the bullseye the mark. From the files set. */
export const TargetIcon: Icon = {
  name: "TargetIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 12, r: 4.5 }],
    ["circle", { cx: 12, cy: 12, r: 1.8, ...SOLID }],
  ],
};

export default TargetIcon;
