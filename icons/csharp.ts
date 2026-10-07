import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C#: the letter C, its sharp the mark. From the files set. */
export const CsharpIcon: Icon = {
  name: "CsharpIcon",
  node: [
    ["path", { d: "M10.4 9.1A4 4 0 1 0 10.4 14.9" }],
    ["path", { d: "M15.25 7v10M18.75 7v10M13.5 10h7M13.5 14h7", ...SOLID_STROKE }],
  ],
};

export default CsharpIcon;
