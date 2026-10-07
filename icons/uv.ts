import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** uv: the letters u and v, the v the mark. From the files set. */
export const UvIcon: Icon = {
  name: "UvIcon",
  node: [
    ["path", { d: "M4.5 8v5a3.5 3.5 0 0 0 7 0V8" }],
    ["path", { d: "M13.5 8l3.25 8.5L20 8", ...SOLID_STROKE }],
  ],
};

export default UvIcon;
