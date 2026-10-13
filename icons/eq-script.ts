import type { Icon } from "../types";
import { SOLID } from "../system";

/** A script: a term with a small one raised beside it. From the math set. */
export const EqScriptIcon: Icon = {
  name: "EqScriptIcon",
  node: [
    ["rect", { x: 3.5, y: 9, width: 9, height: 11.5, rx: 1 }],
    ["rect", { x: 14.5, y: 3.5, width: 6, height: 6, rx: 1, ...SOLID }],
  ],
};

export default EqScriptIcon;
