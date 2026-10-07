import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Modernizr: a frame with two slashes, the slashes the mark. From the files set. */
export const ModernizrIcon: Icon = {
  name: "ModernizrIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M9 15.5l3-7M13 15.5l3-7", ...SOLID_STROKE }],
  ],
};

export default ModernizrIcon;
