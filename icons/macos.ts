import type { Icon } from "../types";
import { SOLID } from "../system";

/** macOS: a window with its three title-bar buttons, filled. From the files set. */
export const MacosIcon: Icon = {
  name: "MacosIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M3.5 10h17" }],
    ["circle", { cx: 7, cy: 7.25, r: 1, ...SOLID }],
    ["circle", { cx: 10, cy: 7.25, r: 1, ...SOLID }],
    ["circle", { cx: 13, cy: 7.25, r: 1, ...SOLID }],
  ],
};

export default MacosIcon;
