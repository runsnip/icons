import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Track changes: a page whose changed lines are marked by a bar in the margin. From the insert set. */
export const TrackChangesIcon: Icon = {
  name: "TrackChangesIcon",
  node: [
    ["path", { d: "M15 3.5H9.5A2.5 2.5 0 0 0 7 6v12a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M10 11.5h7M10 14.5h7M10 17.5h4" }],
    ["path", { d: "M3.5 10.5v8", ...SOLID_STROKE }],
  ],
};

export default TrackChangesIcon;
