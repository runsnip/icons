import type { Icon } from "../types";
import { SOLID } from "../system";

/** Horusec: the eye of Horus watching the code, its pupil the mark. From the files set. */
export const HorusecIcon: Icon = {
  name: "HorusecIcon",
  node: [
    ["path", { d: "M3.5 12C6 7.5 9 6 12 6s6 1.5 8.5 6c-2.5 4.5-5.5 6-8.5 6s-6-1.5-8.5-6Z" }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default HorusecIcon;
