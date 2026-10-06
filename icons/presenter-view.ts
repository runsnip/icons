import type { Icon } from "../types";
import { SOLID } from "../system";

/** A screen with notes beneath. From the slides set. */
export const PresenterViewIcon: Icon = {
  name: "PresenterViewIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 13, rx: 2 }],
    ["rect", { x: 6.5, y: 6.5, width: 7, height: 4.5, rx: 1, ...SOLID }],
    ["path", { d: "M6.5 13.5h11M8.5 20.5h7" }],
  ],
};

export default PresenterViewIcon;
