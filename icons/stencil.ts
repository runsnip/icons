import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Stencil: three staggered bars, the middle one the mark. From the files set. */
export const StencilIcon: Icon = {
  name: "StencilIcon",
  node: [
    ["path", { d: "M9.5 7h10M4.5 17h10" }],
    ["path", { d: "M4.5 12h15", ...SOLID_STROKE }],
  ],
};

export default StencilIcon;
