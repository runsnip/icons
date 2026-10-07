import type { Icon } from "../types";
import { SOLID } from "../system";

/** FoxPro: a fox's head, its nose the mark. From the files set. */
export const FoxproIcon: Icon = {
  name: "FoxproIcon",
  node: [
    ["path", { d: "M4 4.5 9 8.5h6l5-4-1 6.5L12 20 5 11Z" }],
    ["path", { d: "M10.25 15.5h3.5L12 18Z", ...SOLID }],
  ],
};

export default FoxproIcon;
