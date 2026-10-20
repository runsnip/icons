import type { Icon } from "../types";
import { SOLID } from "../system";

/** A drive: a case with its lower band, a slot and the light, the light the mark. From the ui set. */
export const HardDriveIcon: Icon = {
  name: "HardDriveIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2.5 }],
    ["path", { d: "M3.5 12.5h17M7 15.75h4.5" }],
    ["circle", { cx: 16.5, cy: 15.75, r: 1.25, ...SOLID }],
  ],
};

export default HardDriveIcon;
