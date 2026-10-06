import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Text struck through. From the pdf set. */
export const AnnotateStrikeoutIcon: Icon = {
  name: "AnnotateStrikeoutIcon",
  node: [
    ["path", { d: "M4.5 4.5h15M4.5 19.5h10M6.5 8v8M10 10v6M13.5 8v8M17 10v6" }],
    ["path", { d: "M3.5 13h17", ...SOLID_STROKE }],
  ],
};

export default AnnotateStrikeoutIcon;
