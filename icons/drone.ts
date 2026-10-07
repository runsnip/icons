import type { Icon } from "../types";
import { SOLID } from "../system";

/** Drone CI: a ring, a solid moon set off its centre. From the files set. */
export const DroneIcon: Icon = {
  name: "DroneIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 14, cy: 14, r: 3.5, ...SOLID }],
  ],
};

export default DroneIcon;
