import type { Icon } from "../types";
import { SOLID } from "../system";

/** Concourse: a job feeding two more, the first the mark. From the files set. */
export const ConcourseIcon: Icon = {
  name: "ConcourseIcon",
  node: [
    ["rect", { x: 8.5, y: 3.5, width: 7, height: 6, rx: 1.5, ...SOLID }],
    ["path", { d: "M12 9.5v3M7 15.5V14a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 14v1.5" }],
    ["rect", { x: 3.5, y: 15.5, width: 7, height: 5, rx: 1.5 }],
    ["rect", { x: 13.5, y: 15.5, width: 7, height: 5, rx: 1.5 }],
  ],
};

export default ConcourseIcon;
