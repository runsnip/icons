import type { Icon } from "../types";
import { SOLID } from "../system";

/** Docker: the whale, the containers on its back solid. From the files set. */
export const DockerIcon: Icon = {
  name: "DockerIcon",
  node: [
    ["path", { d: "M3.5 12.5H17.5c.5-1.6 1.6-2.5 3-2.5 0 1.7-.8 3-2 3.6-1.2 4.2-4.4 6.9-8.5 6.9-4.4 0-6.5-3.4-6.5-8Z" }],
    ["rect", { x: 5.5, y: 8.5, width: 3, height: 3, rx: 0.5, ...SOLID }],
    ["rect", { x: 9.25, y: 8.5, width: 3, height: 3, rx: 0.5, ...SOLID }],
    ["rect", { x: 13, y: 8.5, width: 3, height: 3, rx: 0.5, ...SOLID }],
    ["rect", { x: 9.25, y: 4.75, width: 3, height: 3, rx: 0.5, ...SOLID }],
  ],
};

export default DockerIcon;
