import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Resume: a résumé, its photo the mark, in the brand frame. From the brand set. */
export const ResumeBrandIcon: Icon = {
  name: "ResumeBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["circle", { cx: 9.5, cy: 9.5, r: 2, ...SOLID }],
    ["path", { d: "M13.5 8.5h3.5M13.5 11h3.5M7.5 14.5h9M7.5 17h5.5" }],
  ],
};

export default ResumeBrandIcon;
