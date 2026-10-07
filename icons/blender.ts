import type { Icon } from "../types";
import { SOLID } from "../system";

/** Blender: the ring with its arms reaching up-left, the core the mark. From the files set. */
export const BlenderIcon: Icon = {
  name: "BlenderIcon",
  node: [
    ["circle", { cx: 14, cy: 13.5, r: 6 }],
    ["path", { d: "M9.6 9.2H4M11 7.8 7 4" }],
    ["circle", { cx: 14, cy: 13.5, r: 2.4, ...SOLID }],
  ],
};

export default BlenderIcon;
