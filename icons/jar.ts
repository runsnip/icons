import type { Icon } from "../types";
import { SOLID } from "../system";

/** Java archives: a jar, its lid the mark. From the files set. */
export const JarIcon: Icon = {
  name: "JarIcon",
  node: [
    ["path", { d: "M8 7v1.5a3 3 0 0 0-2.5 3V18a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6.5a3 3 0 0 0-2.5-3V7" }],
    ["rect", { x: 7, y: 3.5, width: 10, height: 3.5, rx: 1, ...SOLID }],
  ],
};

export default JarIcon;
