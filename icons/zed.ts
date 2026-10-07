import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Zed: a heavy Z in a squared frame. From the files set. */
export const ZedIcon: Icon = {
  name: "ZedIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8 8h8l-8 8h8", ...SOLID_STROKE }],
  ],
};

export default ZedIcon;
