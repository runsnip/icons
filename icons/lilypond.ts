import type { Icon } from "../types";
import { SOLID } from "../system";

/** LilyPond: a note set on the staff, its head the mark. From the files set. */
export const LilypondIcon: Icon = {
  name: "LilypondIcon",
  node: [
    ["path", { d: "M3.5 12.5h17M3.5 17h17M11.5 16.5v-12c1 2.5 5.5 3 5.5 6.5" }],
    ["ellipse", { cx: 8.3, cy: 17, rx: 3.2, ry: 2.5, ...SOLID }],
  ],
};

export default LilypondIcon;
