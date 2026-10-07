import type { Icon } from "../types";
import { SOLID } from "../system";

/** tape: a roll of tape, its core the mark. From the files set. */
export const TapeIcon: Icon = {
  name: "TapeIcon",
  node: [
    ["circle", { cx: 11, cy: 12, r: 7 }],
    ["path", { d: "M11 19h9.5" }],
    ["circle", { cx: 11, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default TapeIcon;
