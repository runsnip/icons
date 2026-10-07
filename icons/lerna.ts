import type { Icon } from "../types";
import { SOLID } from "../system";

/** Lerna: many packages from one, the one the mark. From the files set. */
export const LernaIcon: Icon = {
  name: "LernaIcon",
  node: [
    ["rect", { x: 8.5, y: 3.5, width: 7, height: 7, rx: 1.5, ...SOLID }],
    ["rect", { x: 3.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
    ["rect", { x: 13.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
  ],
};

export default LernaIcon;
