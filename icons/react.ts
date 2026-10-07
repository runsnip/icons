import type { Icon } from "../types";
import { SOLID } from "../system";

/** React: three orbits round a nucleus, the nucleus the mark. From the files set. */
export const ReactIcon: Icon = {
  name: "ReactIcon",
  node: [
    ["path", { d: "M20.5 12A8.5 3.3 0 1 0 3.5 12A8.5 3.3 0 1 0 20.5 12Z" }],
    ["path", { d: "M16.25 19.361A8.5 3.3 60 1 0 7.75 4.639A8.5 3.3 60 1 0 16.25 19.361Z" }],
    ["path", { d: "M7.75 19.361A8.5 3.3 120 1 0 16.25 4.639A8.5 3.3 120 1 0 7.75 19.361Z" }],
    ["circle", { cx: 12, cy: 12, r: 1.9, ...SOLID }],
  ],
};

export default ReactIcon;
