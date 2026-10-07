import type { Icon } from "../types";
import { SOLID } from "../system";

/** Python: two interlocked halves, their eyes the mark. From the files set. */
export const PythonIcon: Icon = {
  name: "PythonIcon",
  node: [
    ["path", { d: "M15.5 9.5V6A2.5 2.5 0 0 0 13 3.5h-2A2.5 2.5 0 0 0 8.5 6v3.5H6A2.5 2.5 0 0 0 3.5 12v1A2.5 2.5 0 0 0 6 15.5h2.5V14a2 2 0 0 1 2-2h3a2 2 0 0 0 2-2Z" }],
    ["path", { d: "M8.5 14.5V18a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3.5H18a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 18 8.5h-2.5V10a2 2 0 0 1-2 2h-3a2 2 0 0 0-2 2Z" }],
    ["circle", { cx: 11, cy: 6.5, r: 1.2, ...SOLID }],
    ["circle", { cx: 13, cy: 17.5, r: 1.2, ...SOLID }],
  ],
};

export default PythonIcon;
