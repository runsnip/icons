import type { Icon } from "../types";
import { SOLID } from "../system";

/** Copilot: a pilot's helmet, its goggles the mark. From the files set. */
export const CopilotIcon: Icon = {
  name: "CopilotIcon",
  node: [
    ["path", { d: "M4.5 13a7.5 7.5 0 0 1 15 0v3.5c0 1.5-3.5 3.5-7.5 3.5s-7.5-2-7.5-3.5Z" }],
    ["rect", { x: 6.5, y: 10, width: 4.5, height: 3.5, rx: 1.5, ...SOLID }],
    ["rect", { x: 13, y: 10, width: 4.5, height: 3.5, rx: 1.5, ...SOLID }],
  ],
};

export default CopilotIcon;
