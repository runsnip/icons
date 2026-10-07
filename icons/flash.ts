import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Flash: a frame, the script f in it the mark. From the files set. */
export const FlashIcon: Icon = {
  name: "FlashIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M16 7.5h-1.5a2.5 2.5 0 0 0-2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8M9.5 12h5", ...SOLID_STROKE }],
  ],
};

export default FlashIcon;
