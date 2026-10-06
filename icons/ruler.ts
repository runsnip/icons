import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A ruler. From the insert set. */
export const RulerIcon: Icon = {
  name: "RulerIcon",
  node: [
    ["rect", { x: 3.5, y: 7, width: 17, height: 10, rx: 1.5 }],
    ["path", { d: "M7 7v3M10.5 7v5M14 7v3M17.5 7v5", ...SOLID_STROKE }],
  ],
};

export default RulerIcon;
