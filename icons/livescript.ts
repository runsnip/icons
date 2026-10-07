import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** LiveScript: the letters LS in a frame. From the files set. */
export const LivescriptIcon: Icon = {
  name: "LivescriptIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.5 8v8h3.5M16.5 8.5H14a1.75 1.75 0 0 0 0 3.5h1a1.75 1.75 0 0 1 0 3.5h-2.5", ...SOLID_STROKE }],
  ],
};

export default LivescriptIcon;
