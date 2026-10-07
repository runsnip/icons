import type { Icon } from "../types";
import { SOLID } from "../system";

/** A dynamic library: a module piece, its joining knobs solid. From the files set. */
export const DllIcon: Icon = {
  name: "DllIcon",
  node: [
    ["rect", { x: 5, y: 8.5, width: 11, height: 11, rx: 1.5 }],
    ["circle", { cx: 10.5, cy: 8.5, r: 2.5, ...SOLID }],
    ["circle", { cx: 16, cy: 14, r: 2.5, ...SOLID }],
  ],
};

export default DllIcon;
