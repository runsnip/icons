import type { Icon } from "../types";
import { SOLID } from "../system";

/** A matrix: four terms between square brackets. From the math set. */
export const EqMatrixIcon: Icon = {
  name: "EqMatrixIcon",
  node: [
    ["path", { d: "M7 3.5H4.5v17H7M17 3.5h2.5v17H17" }],
    ["rect", { x: 8, y: 7.5, width: 3, height: 3, rx: .5, ...SOLID }],
    ["rect", { x: 13, y: 7.5, width: 3, height: 3, rx: .5, ...SOLID }],
    ["rect", { x: 8, y: 13.5, width: 3, height: 3, rx: .5, ...SOLID }],
    ["rect", { x: 13, y: 13.5, width: 3, height: 3, rx: .5, ...SOLID }],
  ],
};

export default EqMatrixIcon;
