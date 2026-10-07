import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Marko: a wave in the shape of an M, its middle the mark. From the files set. */
export const MarkojsIcon: Icon = {
  name: "MarkojsIcon",
  node: [
    ["path", { d: "M4 15.5 8 8.5M16 8.5l4 7" }],
    ["path", { d: "M8 8.5l4 7 4-7", ...SOLID_STROKE }],
  ],
};

export default MarkojsIcon;
