import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Activity: a pulse line. From the collab set. */
export const ActivityIcon: Icon = {
  name: "ActivityIcon",
  node: [
    ["path", { d: "M3.5 12h4M16.5 12h4" }],
    ["path", { d: "M7.5 12 10 5.5l4 13 2.5-6.5", ...SOLID_STROKE }],
  ],
};

export default ActivityIcon;
