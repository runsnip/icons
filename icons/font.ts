import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Font: the letters Aa, the small a the mark. From the files set. */
export const FontIcon: Icon = {
  name: "FontIcon",
  node: [
    ["path", { d: "M3.5 19 8.25 5 13 19M5.2 14h6.1" }],
    ["path", { d: "M19.5 13.5V19M19.5 16.25a2.5 2.75 0 1 1-5 0 2.5 2.75 0 1 1 5 0", ...SOLID_STROKE }],
  ],
};

export default FontIcon;
