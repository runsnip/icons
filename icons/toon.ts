import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TOON: a brace and rows, the header row the mark. From the files set. */
export const ToonIcon: Icon = {
  name: "ToonIcon",
  node: [
    ["path", { d: "M8 4.5c-2 0-2.5 1-2.5 2.5v2.5c0 1.5-1 3-2 3 1 0 2 1.5 2 3v2.5c0 1.5.5 2.5 2.5 2.5" }],
    ["path", { d: "M10.5 12h9M10.5 16.5h9" }],
    ["path", { d: "M10.5 7.5h9", ...SOLID_STROKE }],
  ],
};

export default ToonIcon;
