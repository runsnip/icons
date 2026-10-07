import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TeX: a T and an X, the T's bar the mark. From the files set. */
export const TexIcon: Icon = {
  name: "TexIcon",
  node: [
    ["path", { d: "M7.5 7v11.5" }],
    ["path", { d: "M13.5 10.5l6.5 9M20 10.5l-6.5 9" }],
    ["path", { d: "M3.5 6.5h8", ...SOLID_STROKE }],
  ],
};

export default TexIcon;
