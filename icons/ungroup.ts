import type { Icon } from "../types";
import { SOLID } from "../system";

/** Objects with the group frame broken. From the slides set. */
export const UngroupIcon: Icon = {
  name: "UngroupIcon",
  node: [
    ["path", { d: "M3.5 12.5v-7a2 2 0 0 1 2-2h7M11.5 20.5h7a2 2 0 0 0 2-2v-7" }],
    ["rect", { x: 6.5, y: 6.5, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
    ["rect", { x: 13, y: 13, width: 4.5, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default UngroupIcon;
