import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Zig: a Z whose bars run past it, its diagonal the mark. From the files set. */
export const ZigIcon: Icon = {
  name: "ZigIcon",
  node: [
    ["path", { d: "M3.5 6.5H16M8 17.5h12.5" }],
    ["path", { d: "M17 6.5 7 17.5", ...SOLID_STROKE }],
  ],
};

export default ZigIcon;
