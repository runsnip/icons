import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** BuckleScript: the letters BS, the mark, in a square. From the files set. */
export const BucklescriptIcon: Icon = {
  name: "BucklescriptIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8 10v7h2.4a1.75 1.75 0 0 0 0-3.5H8h2a1.75 1.75 0 0 0 0-3.5ZM17 10.5h-2.2a1.75 1.75 0 0 0 0 3.5h.7a1.75 1.75 0 0 1 0 3.5h-2.3", ...SOLID_STROKE }],
  ],
};

export default BucklescriptIcon;
