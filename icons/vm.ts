import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Virtual machines: a screen within a screen, the inner screen the mark. From the files set. */
export const VmIcon: Icon = {
  name: "VmIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 13, rx: 2 }],
    ["path", { d: "M8.5 20h7" }],
    ["rect", { x: 7.5, y: 7, width: 9, height: 6, rx: 1, ...SOLID_STROKE }],
  ],
};

export default VmIcon;
