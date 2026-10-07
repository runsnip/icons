import type { Icon } from "../types";
import { SOLID } from "../system";

/** A controller: a gamepad, its buttons the mark. From the files set. */
export const ControllerIcon: Icon = {
  name: "ControllerIcon",
  node: [
    ["path", { d: "M7 7.5h10a3.5 3.5 0 0 1 3.5 3.5v4.5a2.5 2.5 0 0 1-4.3 1.7l-1.7-1.7h-5l-1.7 1.7A2.5 2.5 0 0 1 3.5 15.5V11A3.5 3.5 0 0 1 7 7.5Z" }],
    ["path", { d: "M8 10v4M6 12h4" }],
    ["circle", { cx: 15, cy: 12.5, r: 1.3, ...SOLID }],
    ["circle", { cx: 17.5, cy: 10.5, r: 1.3, ...SOLID }],
  ],
};

export default ControllerIcon;
