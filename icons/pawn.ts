import type { Icon } from "../types";
import { SOLID } from "../system";

/** Pawn, the scripting language: a chess pawn, its head the mark. From the files set. */
export const PawnIcon: Icon = {
  name: "PawnIcon",
  node: [
    ["path", { d: "M9 11h6M10.5 11 9.5 16.5M13.5 11l1 5.5M5.5 20.5h13v-1.5a2.5 2.5 0 0 0-2.5-2.5H8A2.5 2.5 0 0 0 5.5 19Z" }],
    ["circle", { cx: 12, cy: 6.5, r: 3, ...SOLID }],
  ],
};

export default PawnIcon;
