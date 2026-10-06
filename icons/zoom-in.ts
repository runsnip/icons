import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Zoom in: a magnifier with a plus. From the insert set. */
export const ZoomInIcon: Icon = {
  name: "ZoomInIcon",
  node: [
    ["circle", { cx: 10, cy: 10, r: 6.5 }],
    ["path", { d: "M15 15l5.5 5.5" }],
    ["path", { d: "M10 7.5v5M7.5 10h5", ...SOLID_STROKE }],
  ],
};

export default ZoomInIcon;
