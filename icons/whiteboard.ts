import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A whiteboard (tldraw and the like): a board, the scribble on it the mark. From the files set. */
export const WhiteboardIcon: Icon = {
  name: "WhiteboardIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M7 13c1.5-3 3-3.5 3.5-1.5s2 2 3.5-.5 2.5-2.5 3 0", ...SOLID_STROKE }],
  ],
};

export default WhiteboardIcon;
