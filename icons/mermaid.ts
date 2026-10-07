import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Mermaid: a flowchart of three boxes, the links between them the mark. From the files set. */
export const MermaidIcon: Icon = {
  name: "MermaidIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 4.5, rx: 1 }],
    ["rect", { x: 3.5, y: 16, width: 6, height: 4.5, rx: 1 }],
    ["rect", { x: 14.5, y: 16, width: 6, height: 4.5, rx: 1 }],
    ["path", { d: "M12 8v3.5M6.5 15.5V12h11v3.5", ...SOLID_STROKE }],
  ],
};

export default MermaidIcon;
