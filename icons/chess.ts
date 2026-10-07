import type { Icon } from "../types";
import { SOLID } from "../system";

/** Chess: a pawn, its head the mark. From the files set. */
export const ChessIcon: Icon = {
  name: "ChessIcon",
  node: [
    ["path", { d: "M9 11h6M10.5 11l-1 6h5l-1-6M6.5 20h11M8 17h8" }],
    ["circle", { cx: 12, cy: 7, r: 3, ...SOLID }],
  ],
};

export default ChessIcon;
