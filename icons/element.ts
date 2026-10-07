import type { Icon } from "../types";
import { SOLID } from "../system";

/** An element: a periodic-table tile, its number solid. From the files set. */
export const ElementIcon: Icon = {
  name: "ElementIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["rect", { x: 7, y: 7, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["path", { d: "M7 16h10" }],
  ],
};

export default ElementIcon;
