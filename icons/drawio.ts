import type { Icon } from "../types";
import { SOLID } from "../system";

/** draw.io: a diagram of three boxes, the root solid. From the files set. */
export const DrawioIcon: Icon = {
  name: "DrawioIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 5, rx: 1, ...SOLID }],
    ["rect", { x: 3.5, y: 15, width: 6, height: 5.5, rx: 1 }],
    ["rect", { x: 14.5, y: 15, width: 6, height: 5.5, rx: 1 }],
    ["path", { d: "M12 8.5V12M6.5 15v-3h11v3" }],
  ],
};

export default DrawioIcon;
