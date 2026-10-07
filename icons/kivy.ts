import type { Icon } from "../types";
import { SOLID } from "../system";

/** Kivy: a K of three slabs, the lower one the mark. From the files set. */
export const KivyIcon: Icon = {
  name: "KivyIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 4, height: 15, rx: 1 }],
    ["path", { d: "M11 11.5 16.5 4.5h4L15 11.5Z" }],
    ["path", { d: "M11 12.5h4l5.5 7h-4Z", ...SOLID }],
  ],
};

export default KivyIcon;
