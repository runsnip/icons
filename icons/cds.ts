import type { Icon } from "../types";
import { SOLID } from "../system";

/** CDS: two entities joined by a relation, the first the mark. From the files set. */
export const CdsIcon: Icon = {
  name: "CdsIcon",
  node: [
    ["rect", { x: 3.5, y: 4, width: 8, height: 6, rx: 1.5, ...SOLID }],
    ["rect", { x: 12.5, y: 14, width: 8, height: 6, rx: 1.5 }],
    ["path", { d: "M7.5 10v7h5" }],
  ],
};

export default CdsIcon;
