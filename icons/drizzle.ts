import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Drizzle: slanted drops in two rows, the lower pair the mark. From the files set. */
export const DrizzleIcon: Icon = {
  name: "DrizzleIcon",
  node: [
    ["path", { d: "M4.5 10l3-5.5M9.5 10l3-5.5" }],
    ["path", { d: "M11.5 19.5l3-5.5M16.5 19.5l3-5.5", ...SOLID_STROKE }],
  ],
};

export default DrizzleIcon;
