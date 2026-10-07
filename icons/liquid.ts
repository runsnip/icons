import type { Icon } from "../types";
import { SOLID } from "../system";

/** Liquid: a template's braces with a drop between them. From the files set. */
export const LiquidIcon: Icon = {
  name: "LiquidIcon",
  node: [
    ["path", { d: "M8 4.5H7a1.5 1.5 0 0 0-1.5 1.5v4L4 12l1.5 2v4A1.5 1.5 0 0 0 7 19.5h1M16 4.5h1a1.5 1.5 0 0 1 1.5 1.5v4L20 12l-1.5 2v4a1.5 1.5 0 0 1-1.5 1.5h-1" }],
    ["path", { d: "M12 7.5S9 11.1 9 13.4a3 3 0 0 0 6 0C15 11.1 12 7.5 12 7.5Z", ...SOLID }],
  ],
};

export default LiquidIcon;
