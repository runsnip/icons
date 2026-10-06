import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cells shaded in steps. From the sheets set. */
export const ConditionalFormatIcon: Icon = {
  name: "ConditionalFormatIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M3.5 9.17h17M3.5 14.83h17M6.5 6.33h3M6.5 12h6.5" }],
    ["path", { d: "M6.5 17.67h11", ...SOLID_STROKE }],
  ],
};

export default ConditionalFormatIcon;
