import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Racket: a lambda in a circle, the lambda the mark. From the files set. */
export const RacketIcon: Icon = {
  name: "RacketIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8 17.5 11.8 10.5M8.5 6.5h1.5c1 0 1.5.5 2 1.5l4.5 9.5", ...SOLID_STROKE }],
  ],
};

export default RacketIcon;
