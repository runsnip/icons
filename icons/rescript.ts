import type { Icon } from "../types";
import { SOLID } from "../system";

/** ReScript: an R in a square and its square point filled. From the files set. */
export const RescriptIcon: Icon = {
  name: "RescriptIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.5 17V8h3.2a2.5 2.5 0 0 1 0 5H7.5M10.5 13l2.3 4" }],
    ["rect", { x: 14.5, y: 14, width: 3, height: 3, rx: 0.6, ...SOLID }],
  ],
};

export default RescriptIcon;
