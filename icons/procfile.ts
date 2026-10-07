import type { Icon } from "../types";
import { SOLID } from "../system";

/** Procfile: a list of processes, their markers the mark. From the files set. */
export const ProcfileIcon: Icon = {
  name: "ProcfileIcon",
  node: [
    ["path", { d: "M10 6.5h10.5M10 12h10.5M10 17.5h7" }],
    ["rect", { x: 3.5, y: 5, width: 3, height: 3, rx: 0.75, ...SOLID }],
    ["rect", { x: 3.5, y: 10.5, width: 3, height: 3, rx: 0.75, ...SOLID }],
    ["rect", { x: 3.5, y: 16, width: 3, height: 3, rx: 0.75, ...SOLID }],
  ],
};

export default ProcfileIcon;
