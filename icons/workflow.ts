import type { Icon } from "../types";
import { SOLID } from "../system";

/** Workflow: three jobs joined in order, the last one the mark. From the files set. */
export const WorkflowIcon: Icon = {
  name: "WorkflowIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 7, height: 6, rx: 1.5 }],
    ["rect", { x: 13.5, y: 3.5, width: 7, height: 6, rx: 1.5 }],
    ["path", { d: "M10.5 6.5h3M7 9.5V14a3 3 0 0 0 3 3h3.5" }],
    ["rect", { x: 13.5, y: 14, width: 7, height: 6, rx: 1.5, ...SOLID }],
  ],
};

export default WorkflowIcon;
