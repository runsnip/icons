import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Yarn: a ball of yarn, its wound threads the mark. From the files set. */
export const YarnIcon: Icon = {
  name: "YarnIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M5.5 7.5c4.5.5 8.5 4.5 9.5 12M4 11.5c4 .5 7.5 3.5 8.5 8.5", ...SOLID_STROKE }],
  ],
};

export default YarnIcon;
