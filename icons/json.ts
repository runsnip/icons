import type { Icon } from "../types";
import { SOLID } from "../system";

/** JSON: curly braces around a pair, the pair the mark. From the files set. */
export const JsonIcon: Icon = {
  name: "JsonIcon",
  node: [
    ["path", { d: "M8.5 4.5h-1a2 2 0 0 0-2 2V10l-2 2 2 2v3.5a2 2 0 0 0 2 2h1M15.5 4.5h1a2 2 0 0 1 2 2V10l2 2-2 2v3.5a2 2 0 0 1-2 2h-1" }],
    ["circle", { cx: 9.8, cy: 12, r: 1.4, ...SOLID }],
    ["circle", { cx: 14.2, cy: 12, r: 1.4, ...SOLID }],
  ],
};

export default JsonIcon;
