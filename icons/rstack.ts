import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rstack: three chevrons rising, the top one thickened. From the files set. */
export const RstackIcon: Icon = {
  name: "RstackIcon",
  node: [
    ["path", { d: "M4.5 9.5 12 5l7.5 4.5", ...SOLID_STROKE }],
    ["path", { d: "M4.5 14.5 12 10l7.5 4.5M4.5 19.5 12 15l7.5 4.5" }],
  ],
};

export default RstackIcon;
