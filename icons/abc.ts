import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The letters abc, thickened: ABC music notation. From the files set. */
export const AbcIcon: Icon = {
  name: "AbcIcon",
  node: [
    ["path", { d: "M7.5 11v5.5M7.5 13.75a2 2.75 0 0 0-4 0 2 2.75 0 0 0 4 0M10 6.5v10M10 13.75a2 2.75 0 0 1 4 0 2 2.75 0 0 1-4 0M20 11.9a2.2 2.75 0 1 0 0 3.7", ...SOLID_STROKE }],
  ],
};

export default AbcIcon;
