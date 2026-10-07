import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A block on a thickened footing: the base everything builds on. From the files set. */
export const BaseIcon: Icon = {
  name: "BaseIcon",
  node: [
    ["rect", { x: 6.5, y: 4.5, width: 11, height: 10, rx: 1.5 }],
    ["path", { d: "M4.5 18.5h15", ...SOLID_STROKE }],
  ],
};

export default BaseIcon;
