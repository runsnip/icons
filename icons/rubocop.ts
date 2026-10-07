import type { Icon } from "../types";
import { SOLID } from "../system";

/** RuboCop: a head with its visor filled. From the files set. */
export const RubocopIcon: Icon = {
  name: "RubocopIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 15, height: 15, rx: 5 }],
    ["rect", { x: 7, y: 9, width: 10, height: 3.5, rx: 1.5, ...SOLID }],
    ["path", { d: "M10 15.5h4" }],
  ],
};

export default RubocopIcon;
