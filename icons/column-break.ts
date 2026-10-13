import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A column break: two columns of text, the first ending at a dotted break. From the insert set. */
export const ColumnBreakIcon: Icon = {
  name: "ColumnBreakIcon",
  node: [
    ["path", { d: "M3.5 5h7M3.5 9h7M3.5 13h7M13.5 5h7M13.5 9h7M13.5 13h7M13.5 17h7M13.5 20.5h4" }],
    ["path", { d: "M3.5 17.5h1M6.5 17.5h1M9.5 17.5h1", ...SOLID_STROKE }],
  ],
};

export default ColumnBreakIcon;
