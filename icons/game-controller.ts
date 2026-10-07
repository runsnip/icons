import type { Icon } from "../types";
import { SOLID } from "../system";

/** A game place or model: a controller, its buttons filled. From the files set. */
export const GameControllerIcon: Icon = {
  name: "GameControllerIcon",
  node: [
    ["path", { d: "M7 7.5h10a3.5 3.5 0 0 1 3.5 3.5v3.7a2.8 2.8 0 0 1-5 1.7L14.3 15H9.7l-1.2 1.4a2.8 2.8 0 0 1-5-1.7V11A3.5 3.5 0 0 1 7 7.5Z" }],
    ["path", { d: "M8 10v3.5M6.25 11.75h3.5" }],
    ["circle", { cx: 15, cy: 10.7, r: 1.2, ...SOLID }],
    ["circle", { cx: 17.2, cy: 12.9, r: 1.2, ...SOLID }],
  ],
};

export default GameControllerIcon;
