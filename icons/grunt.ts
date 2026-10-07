import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Grunt: a boar's head, its tusks the mark. From the files set. */
export const GruntIcon: Icon = {
  name: "GruntIcon",
  node: [
    ["path", { d: "M5 4.5 8.5 7.5h7L19 4.5l.5 7.5c0 4.5-3.2 7.5-7.5 7.5S4.5 16.5 4.5 12Z" }],
    ["path", { d: "M9 14.5 7.5 17.5M15 14.5l1.5 3", ...SOLID_STROKE }],
  ],
};

export default GruntIcon;
