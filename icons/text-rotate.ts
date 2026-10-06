import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A slanted ab with a curved arrow. From the sheets set. */
export const TextRotateIcon: Icon = {
  name: "TextRotateIcon",
  node: [
    ["path", { d: "M9.21 14.16 4.96 4.96 14.16 9.21M7.72 10.69 10.69 7.72" }],
    ["path", { d: "M8 20 20 8" }],
    ["path", { d: "M14.5 8H20v5.5", ...SOLID_STROKE }],
  ],
};

export default TextRotateIcon;
