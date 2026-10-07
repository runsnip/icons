import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** LaTeX: a T with its lowered E, the E the mark. From the files set. */
export const LatexIcon: Icon = {
  name: "LatexIcon",
  node: [
    ["path", { d: "M3.5 5.5h9M8 5.5v11" }],
    ["path", { d: "M19.5 10h-5v8.5h5M14.5 14.25h4", ...SOLID_STROKE }],
  ],
};

export default LatexIcon;
