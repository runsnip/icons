import type { Icon } from "../types";
import { SOLID } from "../system";

/** Three boxes in a hierarchy, the top one filled: an architecture diagram. From the files set. */
export const ArchitectureIcon: Icon = {
  name: "ArchitectureIcon",
  node: [
    ["path", { d: "M12 8v4M6.5 15.5V12h11v3.5" }],
    ["rect", { x: 3.5, y: 15.5, width: 6, height: 5, rx: 1 }],
    ["rect", { x: 14.5, y: 15.5, width: 6, height: 5, rx: 1 }],
    ["rect", { x: 9, y: 3.5, width: 6, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default ArchitectureIcon;
