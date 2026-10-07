import type { Icon } from "../types";
import { SOLID } from "../system";

/** Buck: a stag's antlers over its head, the head the mark. From the files set. */
export const BuckIcon: Icon = {
  name: "BuckIcon",
  node: [
    ["path", { d: "M9.5 11.5 7 9V4.5M7 9 4 7.5M14.5 11.5 17 9V4.5M17 9l3-1.5" }],
    ["path", { d: "M8.5 11.5h7L12 19Z", ...SOLID }],
  ],
};

export default BuckIcon;
