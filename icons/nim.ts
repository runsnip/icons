import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Nim: a crown, its band the mark. From the files set. */
export const NimIcon: Icon = {
  name: "NimIcon",
  node: [
    ["path", { d: "M5 15.5 3.5 7l5 3.5L12 5l3.5 5.5 5-3.5-1.5 8.5" }],
    ["path", { d: "M5 18.5h14", ...SOLID_STROKE }],
  ],
};

export default NimIcon;
