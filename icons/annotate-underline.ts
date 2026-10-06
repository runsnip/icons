import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Text with an emphasised underline mark. From the pdf set. */
export const AnnotateUnderlineIcon: Icon = {
  name: "AnnotateUnderlineIcon",
  node: [
    ["path", { d: "M4.5 5h15M4.5 11h8M15 11h4.5M4.5 19.5h15" }],
    ["path", { d: "M4.5 14.5h8", ...SOLID_STROKE }],
  ],
};

export default AnnotateUnderlineIcon;
