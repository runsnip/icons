import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Scraps: a sheet torn along a thickened edge, a scrap below. From the files set. */
export const ScrapIcon: Icon = {
  name: "ScrapIcon",
  node: [
    ["path", { d: "M18.5 15V5a1.5 1.5 0 0 0-1.5-1.5H7A1.5 1.5 0 0 0 5.5 5v10" }],
    ["path", { d: "M5.5 15l2.2 2.5 2.2-2.5 2.2 2.5 2.2-2.5 2.2 2.5 2-2.5", ...SOLID_STROKE }],
  ],
};

export default ScrapIcon;
