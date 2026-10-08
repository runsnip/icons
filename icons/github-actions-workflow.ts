import type { Icon } from "../types";
import { SOLID } from "../system";

/** A workflow: two steps joined by a bend, the second step the mark. From the files set. */
export const GithubActionsWorkflowIcon: Icon = {
  name: "GithubActionsWorkflowIcon",
  node: [
    ["rect", { x: 4, y: 4, width: 5.5, height: 5.5, rx: 1.25 }],
    ["path", { d: "M6.75 9.5V14a3 3 0 0 0 3 3h4.75" }],
    ["rect", { x: 14.5, y: 14.5, width: 5.5, height: 5.5, rx: 1.25, ...SOLID }],
  ],
};

export default GithubActionsWorkflowIcon;
