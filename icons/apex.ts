import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Apex: braces round a thickened peak. From the files set. */
export const ApexIcon: Icon = {
  name: "ApexIcon",
  node: [
    ["path", { d: "M8 4.5c-1.5 0-2 .7-2 2v2.5c0 1-.8 3-2 3 1.2 0 2 2 2 3v2.5c0 1.3.5 2 2 2M16 4.5c1.5 0 2 .7 2 2v2.5c0 1 .8 3 2 3-1.2 0-2 2-2 3v2.5c0 1.3-.5 2-2 2" }],
    ["path", { d: "M9.5 14.5 12 9.5l2.5 5", ...SOLID_STROKE }],
  ],
};

export default ApexIcon;
