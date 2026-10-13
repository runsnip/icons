import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Orientation: a tall page with a wide one laid over it, the wide one's top line marking which way is up. From the insert set. */
export const OrientationIcon: Icon = {
  name: "OrientationIcon",
  node: [
    ["path", { d: "M8.5 18.5h-3a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" }],
    ["rect", { x: 8.5, y: 10.5, width: 12, height: 10, rx: 2 }],
    ["path", { d: "M11.5 14h6", ...SOLID_STROKE }],
  ],
};

export default OrientationIcon;
