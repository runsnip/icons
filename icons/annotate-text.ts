import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A T inside a dashed box. From the pdf set. */
export const AnnotateTextIcon: Icon = {
  name: "AnnotateTextIcon",
  node: [
    ["path", { d: "M3.5 7V5a1.5 1.5 0 0 1 1.5-1.5h2M17 3.5h2a1.5 1.5 0 0 1 1.5 1.5v2M20.5 17v2a1.5 1.5 0 0 1-1.5 1.5h-2M7 20.5H5A1.5 1.5 0 0 1 3.5 19v-2M10.5 3.5h3M10.5 20.5h3M3.5 10.5v3M20.5 10.5v3" }],
    ["path", { d: "M8.5 8.5h7", ...SOLID_STROKE }],
    ["path", { d: "M12 8.5v7.5" }],
  ],
};

export default AnnotateTextIcon;
