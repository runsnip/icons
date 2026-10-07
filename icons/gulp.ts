import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Gulp: a cup, its straw the mark. From the files set. */
export const GulpIcon: Icon = {
  name: "GulpIcon",
  node: [
    ["path", { d: "M5 8.5h14M6.5 8.5l1.5 12h8l1.5-12" }],
    ["path", { d: "M12.5 8.5 14 3.5h3.5", ...SOLID_STROKE }],
  ],
};

export default GulpIcon;
