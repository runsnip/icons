import type { Icon } from "../types";
import { SOLID } from "../system";

/** Linux: Tux the penguin, his feet the mark. From the files set. */
export const LinuxIcon: Icon = {
  name: "LinuxIcon",
  node: [
    ["path", { d: "M8.5 18.5C6 18 4.5 16.5 4.5 14.5c0-2 1.5-3.5 3.5-5V8a4 4 0 0 1 8 0v1.5c2 1.5 3.5 3 3.5 5 0 2-1.5 3.5-4 4" }],
    ["ellipse", { cx: 12, cy: 14, rx: 2.5, ry: 3 }],
    ["path", { d: "M10.5 7h.01M13.5 7h.01" }],
    ["ellipse", { cx: 8, cy: 19, rx: 3, ry: 1.5, ...SOLID }],
    ["ellipse", { cx: 16, cy: 19, rx: 3, ry: 1.5, ...SOLID }],
  ],
};

export default LinuxIcon;
