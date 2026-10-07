import type { Icon } from "../types";
import { SOLID } from "../system";

/** The Cursor editor: an isometric cube, one face solid. From the files set. */
export const CursorEditorIcon: Icon = {
  name: "CursorEditorIcon",
  node: [
    ["polygon", { points: "12,3.5 19.5,7.75 19.5,16.25 12,20.5 4.5,16.25 4.5,7.75" }],
    ["path", { d: "M4.5 7.75 12 12v8.5" }],
    ["polygon", { points: "12,12 17,9.2 12,6.4", ...SOLID }],
  ],
};

export default CursorEditorIcon;
