import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Typst: a lowercase t, its crossbar the mark. From the files set. */
export const TypstIcon: Icon = {
  name: "TypstIcon",
  node: [
    ["path", { d: "M10 4.5v11.5a3.5 3.5 0 0 0 3.5 3.5h3.5" }],
    ["path", { d: "M6 9h11", ...SOLID_STROKE }],
  ],
};

export default TypstIcon;
