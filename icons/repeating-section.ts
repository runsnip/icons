import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A repeating section: two sections alike, and a plus to add another. From the insert set. */
export const RepeatingSectionIcon: Icon = {
  name: "RepeatingSectionIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11, height: 7, rx: 1.5 }],
    ["rect", { x: 3.5, y: 13.5, width: 11, height: 7, rx: 1.5 }],
    ["path", { d: "M18 9.5v5M15.5 12h5", ...SOLID_STROKE }],
  ],
};

export default RepeatingSectionIcon;
