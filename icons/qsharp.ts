import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Q#: the letter Q, its doubled tail the mark. From the files set. */
export const QsharpIcon: Icon = {
  name: "QsharpIcon",
  node: [
    ["circle", { cx: 11, cy: 11, r: 7 }],
    ["path", { d: "M13.5 15.5l4 4.5M16 13.5l4.5 5", ...SOLID_STROKE }],
  ],
};

export default QsharpIcon;
