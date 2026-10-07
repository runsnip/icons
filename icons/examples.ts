import type { Icon } from "../types";
import { SOLID } from "../system";

/** Examples: a demo card over another, its play solid. From the files set. */
export const ExamplesIcon: Icon = {
  name: "ExamplesIcon",
  node: [
    ["path", { d: "M7 3.5h11.5a2 2 0 0 1 2 2V17" }],
    ["rect", { x: 3.5, y: 7, width: 13.5, height: 13.5, rx: 2 }],
    ["polygon", { points: "8.5,10.75 13,13.75 8.5,16.75", ...SOLID }],
  ],
};

export default ExamplesIcon;
