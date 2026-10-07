import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C: the letter C, the mark, in a hexagon. From the files set. */
export const CIcon: Icon = {
  name: "CIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 7.75v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M15 9.5A3.9 3.9 0 1 0 15 14.5", ...SOLID_STROKE }],
  ],
};

export default CIcon;
