import type { Icon } from "../types";
import { SOLID } from "../system";

/** Context: braces round a value they hand down, the value the mark. From the files set. */
export const ContextIcon: Icon = {
  name: "ContextIcon",
  node: [
    ["path", { d: "M8 4.5H7a1.5 1.5 0 0 0-1.5 1.5v4L4 12l1.5 2v4A1.5 1.5 0 0 0 7 19.5h1M16 4.5h1A1.5 1.5 0 0 1 18.5 6v4l1.5 2-1.5 2v4a1.5 1.5 0 0 1-1.5 1.5h-1" }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default ContextIcon;
