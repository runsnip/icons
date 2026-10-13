import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** An endnote: text ending, a short rule, the note under it with its raised number beside. From the insert set. */
export const EndnoteIcon: Icon = {
  name: "EndnoteIcon",
  node: [
    ["path", { d: "M3.5 4.5h17M3.5 8.5h17M3.5 12.5h12M3.5 16.5h4M3.5 20h8" }],
    ["path", { d: "M16 15l2-1.5v7", ...SOLID_STROKE }],
  ],
};

export default EndnoteIcon;
