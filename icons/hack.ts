import type { Icon } from "../types";
import { SOLID } from "../system";

/** Hack: two slanted bars, the lower one the mark. From the files set. */
export const HackIcon: Icon = {
  name: "HackIcon",
  node: [
    ["path", { d: "M4 20.5 9.5 3.5H13L7.5 20.5Z" }],
    ["path", { d: "M14 12h6.5l-2.75 8.5h-6.5Z", ...SOLID }],
  ],
};

export default HackIcon;
