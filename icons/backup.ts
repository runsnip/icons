import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A backup: a database dumped into an archive — the cylinder, an arrow down into the box below, the arrow the mark. From the ops set. */
export const BackupIcon: Icon = {
  name: "BackupIcon",
  node: [
    ["ellipse", { cx: 8.25, cy: 5.5, rx: 4.5, ry: 2 }],
    ["path", { d: "M3.75 5.5v5c0 1.1 2.01 2 4.5 2s4.5-.9 4.5-2v-5M3.5 15.5v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3" }],
    ["path", { d: "M17.5 4v9.5M15 11 17.5 13.5 20 11", ...SOLID_STROKE }],
  ],
};

export default BackupIcon;
