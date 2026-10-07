import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C header: the letter h in a frame, the h the mark. From the files set. */
export const HIcon: Icon = {
  name: "HIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M9 6.5v11M9 13a3 3 0 0 1 6 0v4.5", ...SOLID_STROKE }],
  ],
};

export default HIcon;
