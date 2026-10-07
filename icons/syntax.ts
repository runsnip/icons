import type { Icon } from "../types";
import { SOLID } from "../system";

/** Syntax: a parse tree, its root the mark. From the files set. */
export const SyntaxIcon: Icon = {
  name: "SyntaxIcon",
  node: [
    ["path", { d: "M12 8.5v3.5M6.5 15v-3h11v3" }],
    ["circle", { cx: 6.5, cy: 17.5, r: 2.5 }],
    ["circle", { cx: 17.5, cy: 17.5, r: 2.5 }],
    ["circle", { cx: 12, cy: 6, r: 2.5, ...SOLID }],
  ],
};

export default SyntaxIcon;
