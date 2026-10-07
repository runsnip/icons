import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Mappings: one thing pointing to another, the arrow the mark. From the files set. */
export const MappingsIcon: Icon = {
  name: "MappingsIcon",
  node: [
    ["circle", { cx: 6, cy: 12, r: 2.5 }],
    ["rect", { x: 15.5, y: 9.5, width: 5, height: 5, rx: 1 }],
    ["path", { d: "M10.5 12h3M12 10l1.8 2-1.8 2", ...SOLID_STROKE }],
  ],
};

export default MappingsIcon;
