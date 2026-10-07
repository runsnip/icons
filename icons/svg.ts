import type { Icon } from "../types";
import { SOLID } from "../system";

/** SVG: a vector pen's nib, its ink hole the mark. From the files set. */
export const SvgIcon: Icon = {
  name: "SvgIcon",
  node: [
    ["path", { d: "M8.5 9.5h7l3 5-6.5 6-6.5-6Z" }],
    ["path", { d: "M9.5 9.5v-5h5v5M12 17.5v3" }],
    ["circle", { cx: 12, cy: 14.5, r: 1.75, ...SOLID }],
  ],
};

export default SvgIcon;
