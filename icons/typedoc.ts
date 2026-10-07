import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TypeDoc: a heavy T heading lines of documentation in a frame. From the files set. */
export const TypedocIcon: Icon = {
  name: "TypedocIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M14 8h3M14 11.5h3M7 16h10" }],
    ["path", { d: "M6.5 7.5h5M9 7.5v4.5", ...SOLID_STROKE }],
  ],
};

export default TypedocIcon;
