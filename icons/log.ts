import type { Icon } from "../types";
import { SOLID } from "../system";

/** A log: lines of entries in a frame, each with its stamp, the stamps the mark. From the files set. */
export const LogIcon: Icon = {
  name: "LogIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M11 8h6M11 12h6M11 16h3.5" }],
    ["rect", { x: 6.5, y: 7, width: 2, height: 2, ...SOLID }],
    ["rect", { x: 6.5, y: 11, width: 2, height: 2, ...SOLID }],
    ["rect", { x: 6.5, y: 15, width: 2, height: 2, ...SOLID }],
  ],
};

export default LogIcon;
