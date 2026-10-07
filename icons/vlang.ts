import type { Icon } from "../types";
import { SOLID } from "../system";

/** V: a V of two slanted bars, the left one filled. From the files set. */
export const VlangIcon: Icon = {
  name: "VlangIcon",
  node: [
    ["path", { d: "M17 4.5h3.5l-5.5 15h-3.5Z" }],
    ["path", { d: "M3.5 4.5H7l5.5 15H9Z", ...SOLID }],
  ],
};

export default VlangIcon;
