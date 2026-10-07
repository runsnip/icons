import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A diff: two sides, their plus and minus the mark. From the files set. */
export const DiffIcon: Icon = {
  name: "DiffIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M8.5 9.5h7M12 6v7M8.5 16.5h7", ...SOLID_STROKE }],
  ],
};

export default DiffIcon;
