import type { Icon } from "../types";
import { SOLID } from "../system";

/** Simulink: two blocks joined by a signal line, the second filled. From the files set. */
export const SimulinkIcon: Icon = {
  name: "SimulinkIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 8, height: 7, rx: 1.5 }],
    ["path", { d: "M11.5 8h4.5v4.5" }],
    ["rect", { x: 12.5, y: 12.5, width: 8, height: 7, rx: 1.5, ...SOLID }],
  ],
};

export default SimulinkIcon;
