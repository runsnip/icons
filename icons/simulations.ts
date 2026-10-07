import type { Icon } from "../types";
import { SOLID } from "../system";

/** Simulations: a body in orbit round another, the orbiting one filled. From the files set. */
export const SimulationsIcon: Icon = {
  name: "SimulationsIcon",
  node: [
    ["path", { d: "M4.63 17.16A9 5.2 -35 1 1 19.37 6.84 9 5.2 -35 1 1 4.63 17.16Z" }],
    ["circle", { cx: 12, cy: 12, r: 2 }],
    ["circle", { cx: 15, cy: 16.25, r: 2.2, ...SOLID }],
  ],
};

export default SimulationsIcon;
