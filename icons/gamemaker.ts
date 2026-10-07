import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** GameMaker: an angular G, its inner bar the mark. From the files set. */
export const GamemakerIcon: Icon = {
  name: "GamemakerIcon",
  node: [
    ["path", { d: "M19.5 7 17 4.5H7L4.5 7v10L7 19.5h10l2.5-2.5" }],
    ["path", { d: "M19.5 17v-5h-7", ...SOLID_STROKE }],
  ],
};

export default GamemakerIcon;
