import type { Icon } from "../types";
import { SOLID } from "../system";

/** A processor: a chip, its pins on every side, the die inside it solid. From the ops set. */
export const CpuIcon: Icon = {
  name: "CpuIcon",
  node: [
    ["rect", { x: 6.5, y: 6.5, width: 11, height: 11, rx: 1.5 }],
    ["path", { d: "M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" }],
    ["rect", { x: 9.75, y: 9.75, width: 4.5, height: 4.5, rx: 0.5, ...SOLID }],
  ],
};

export default CpuIcon;
