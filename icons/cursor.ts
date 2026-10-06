import type { Icon } from "../types";
import { SOLID } from "../system";

/** A collaborator's pointer: a cursor with its name tag. From the collab set. */
export const CursorIcon: Icon = {
  name: "CursorIcon",
  node: [
    ["path", { d: "M4.5 4.5 17.5 9.5l-6 2-2 6Z" }],
    ["rect", { x: 14.5, y: 16, width: 6, height: 4.5, rx: 2.25, ...SOLID }],
  ],
};

export default CursorIcon;
