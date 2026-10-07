import type { Icon } from "../types";
import { SOLID } from "../system";

/** Percy, visual testing: two snapshots side by side, the change found in the second the mark. From the files set. */
export const PercyIcon: Icon = {
  name: "PercyIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 7.5, height: 14, rx: 1.5 }],
    ["rect", { x: 13, y: 5, width: 7.5, height: 14, rx: 1.5 }],
    ["rect", { x: 15, y: 10, width: 3.5, height: 4, rx: 0.75, ...SOLID }],
  ],
};

export default PercyIcon;
