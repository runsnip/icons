import type { Icon } from "../types";
import { SOLID } from "../system";

/** tobi: a door, its handle the mark. From the files set. */
export const TobiIcon: Icon = {
  name: "TobiIcon",
  node: [
    ["rect", { x: 6.5, y: 3.5, width: 11, height: 17, rx: 1.5 }],
    ["circle", { cx: 14.25, cy: 12.5, r: 1.5, ...SOLID }],
  ],
};

export default TobiIcon;
