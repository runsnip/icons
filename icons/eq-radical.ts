import type { Icon } from "../types";
import { SOLID } from "../system";

/** A radical: the root sign over its term. From the math set. */
export const EqRadicalIcon: Icon = {
  name: "EqRadicalIcon",
  node: [
    ["path", { d: "M3.5 13h2.5l3 7.5L14 3.5h6.5" }],
    ["rect", { x: 14, y: 9, width: 6.5, height: 7.5, rx: 1, ...SOLID }],
  ],
};

export default EqRadicalIcon;
