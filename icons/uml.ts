import type { Icon } from "../types";
import { SOLID } from "../system";

/** UML: two classes joined by an association, its arrowhead the mark. From the files set. */
export const UmlIcon: Icon = {
  name: "UmlIcon",
  node: [
    ["rect", { x: 3.5, y: 4, width: 8, height: 6, rx: 1.5 }],
    ["rect", { x: 12.5, y: 14, width: 8, height: 6, rx: 1.5 }],
    ["path", { d: "M7.5 10v7h2" }],
    ["polygon", { points: "9.5,14.5 12.5,17 9.5,19.5", ...SOLID }],
  ],
};

export default UmlIcon;
