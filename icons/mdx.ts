import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** MDX: Markdown's M in a frame with an X, the X the mark. From the files set. */
export const MdxIcon: Icon = {
  name: "MdxIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M6.5 15V9l2.5 3 2.5-3v6" }],
    ["path", { d: "M14 9.5l4 5M18 9.5l-4 5", ...SOLID_STROKE }],
  ],
};

export default MdxIcon;
