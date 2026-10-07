import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Lisp: a pair of parentheses, the lambda inside them the mark. From the files set. */
export const LispIcon: Icon = {
  name: "LispIcon",
  node: [
    ["path", { d: "M8 4.5Q4 12 8 19.5M16 4.5Q20 12 16 19.5" }],
    ["path", { d: "M9.5 7h1.5l4 10M12.6 11 9.5 17", ...SOLID_STROKE }],
  ],
};

export default LispIcon;
