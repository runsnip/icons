import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A squiggly underline: text over a wavy line. From the pdf set. */
export const AnnotateSquigglyIcon: Icon = {
  name: "AnnotateSquigglyIcon",
  node: [
    ["path", { d: "M4.5 5h15M4.5 10.5h15" }],
    ["path", { d: "M4.5 17l2-2 2 2 2-2 2 2 2-2 2 2 2-2", ...SOLID_STROKE }],
  ],
};

export default AnnotateSquigglyIcon;
