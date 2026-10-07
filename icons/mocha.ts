import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Mocha: a cup with its steam, the steam the mark. From the files set. */
export const MochaIcon: Icon = {
  name: "MochaIcon",
  node: [
    ["path", { d: "M4.5 10h11v5.5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4ZM15.5 11.5h1.5a2 2 0 0 1 0 4h-1.5" }],
    ["path", { d: "M8.5 4.5V7M12 4.5V7", ...SOLID_STROKE }],
  ],
};

export default MochaIcon;
