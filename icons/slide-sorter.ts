import type { Icon } from "../types";
import { SOLID } from "../system";

/** A grid of small slides. From the slides set. */
export const SlideSorterIcon: Icon = {
  name: "SlideSorterIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 7, height: 6, rx: 1.5 }],
    ["rect", { x: 13.5, y: 4.5, width: 7, height: 6, rx: 1.5, ...SOLID }],
    ["rect", { x: 3.5, y: 13.5, width: 7, height: 6, rx: 1.5 }],
    ["rect", { x: 13.5, y: 13.5, width: 7, height: 6, rx: 1.5 }],
  ],
};

export default SlideSorterIcon;
