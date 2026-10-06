import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Zoom out: a magnifier with a minus. From the insert set. */
export const ZoomOutIcon: Icon = {
  name: "ZoomOutIcon",
  node: [
    ["circle", { cx: 10, cy: 10, r: 6.5 }],
    ["path", { d: "M15 15l5.5 5.5" }],
    ["path", { d: "M7.5 10h5", ...SOLID_STROKE }],
  ],
};

export default ZoomOutIcon;
