import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Idris: the letters Id, the d's stem the mark. From the files set. */
export const IdrisIcon: Icon = {
  name: "IdrisIcon",
  node: [
    ["path", { d: "M4.5 5.5h5M7 5.5v13M4.5 18.5h5" }],
    ["circle", { cx: 15, cy: 14.5, r: 4 }],
    ["path", { d: "M19 4.5v14", ...SOLID_STROKE }],
  ],
};

export default IdrisIcon;
