import type { Icon } from "../types";
import { SOLID } from "../system";

/** LOLCODE: the letters LOL, the O filled. From the files set. */
export const LolcodeIcon: Icon = {
  name: "LolcodeIcon",
  node: [
    ["path", { d: "M4.5 7.5v9H7M16.5 7.5v9H19" }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default LolcodeIcon;
