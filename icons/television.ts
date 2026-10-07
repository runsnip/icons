import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A television: a screen, its antenna the mark. From the files set. */
export const TelevisionIcon: Icon = {
  name: "TelevisionIcon",
  node: [
    ["rect", { x: 3.5, y: 8.5, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M8.5 3.5 12 7l3.5-3.5", ...SOLID_STROKE }],
  ],
};

export default TelevisionIcon;
