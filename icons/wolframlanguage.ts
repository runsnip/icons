import type { Icon } from "../types";
import { SOLID } from "../system";

/** Wolfram Language: a spiked star, its centre the mark. From the files set. */
export const WolframlanguageIcon: Icon = {
  name: "WolframlanguageIcon",
  node: [
    ["polygon", { points: "12,3.5 14.07,7.01 18.01,5.99 16.99,9.93 20.5,12 16.99,14.07 18.01,18.01 14.07,16.99 12,20.5 9.93,16.99 5.99,18.01 7.01,14.07 3.5,12 7.01,9.93 5.99,5.99 9.93,7.01" }],
    ["circle", { cx: 12, cy: 12, r: 2.2, ...SOLID }],
  ],
};

export default WolframlanguageIcon;
