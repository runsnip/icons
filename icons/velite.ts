import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Velite: a heavy V in a squared frame. From the files set. */
export const VeliteIcon: Icon = {
  name: "VeliteIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8.5 8 12 16l3.5-8", ...SOLID_STROKE }],
  ],
};

export default VeliteIcon;
