import type { Icon } from "../types";
import { SOLID } from "../system";

/** YANG: a data tree, its root the mark. From the files set. */
export const YangIcon: Icon = {
  name: "YangIcon",
  node: [
    ["path", { d: "M6.5 8.5V18h6M6.5 12.5h6" }],
    ["rect", { x: 12.5, y: 10.5, width: 8, height: 4, rx: 1.5 }],
    ["rect", { x: 12.5, y: 16, width: 8, height: 4, rx: 1.5 }],
    ["rect", { x: 3.5, y: 3.5, width: 6, height: 5, rx: 1.5, ...SOLID }],
  ],
};

export default YangIcon;
