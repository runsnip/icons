import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Migrations: a database with the arrow of its changes, the arrow the mark. From the files set. */
export const MigrationsIcon: Icon = {
  name: "MigrationsIcon",
  node: [
    ["ellipse", { cx: 9.5, cy: 6.5, rx: 6, ry: 3 }],
    ["path", { d: "M3.5 6.5v11a6 3 0 0 0 12 0v-11M3.5 12a6 3 0 0 0 12 0" }],
    ["path", { d: "M18.5 6.5v11M16.5 15.5l2 2 2-2", ...SOLID_STROKE }],
  ],
};

export default MigrationsIcon;
