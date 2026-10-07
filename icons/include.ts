import type { Icon } from "../types";
import { SOLID } from "../system";

/** Includes: a part drawn in between brackets, the part the mark. From the files set. */
export const IncludeIcon: Icon = {
  name: "IncludeIcon",
  node: [
    ["path", { d: "M8 4.5H5.5v15H8M16 4.5h2.5v15H16" }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default IncludeIcon;
