import type { Icon } from "../types";
import { SOLID } from "../system";

/** React in TypeScript: React's orbits round TypeScript's square, the square the mark. From the files set. */
export const ReactTsIcon: Icon = {
  name: "ReactTsIcon",
  node: [
    ["path", { d: "M20.5 12A8.5 3.3 0 1 0 3.5 12A8.5 3.3 0 1 0 20.5 12Z" }],
    ["path", { d: "M16.25 19.361A8.5 3.3 60 1 0 7.75 4.639A8.5 3.3 60 1 0 16.25 19.361Z" }],
    ["path", { d: "M7.75 19.361A8.5 3.3 120 1 0 16.25 4.639A8.5 3.3 120 1 0 7.75 19.361Z" }],
    ["rect", { x: 10.2, y: 10.2, width: 3.6, height: 3.6, rx: 0.6, ...SOLID }],
  ],
};

export default ReactTsIcon;
