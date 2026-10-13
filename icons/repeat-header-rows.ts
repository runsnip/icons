import type { Icon } from "../types";
import { SOLID } from "../system";

/** Repeat header rows: a table broken across pages, its header row at the top of each part. From the insert set. */
export const RepeatHeaderRowsIcon: Icon = {
  name: "RepeatHeaderRowsIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 7, rx: 2 }],
    ["rect", { x: 3.5, y: 13.5, width: 17, height: 7, rx: 2 }],
    ["path", { d: "M3.5 5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.5h-17Z", ...SOLID }],
    ["path", { d: "M3.5 15.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.5h-17Z", ...SOLID }],
  ],
};

export default RepeatHeaderRowsIcon;
