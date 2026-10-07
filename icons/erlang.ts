import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Erlang: the letter e in its frame, the bar the mark. From the files set. */
export const ErlangIcon: Icon = {
  name: "ErlangIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M16 12a4 4 0 1 0-1.2 2.85" }],
    ["path", { d: "M8 12h8", ...SOLID_STROKE }],
  ],
};

export default ErlangIcon;
