import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** npm: a wide box with a squared n, the n the mark. From the files set. */
export const NpmIcon: Icon = {
  name: "NpmIcon",
  node: [
    ["rect", { x: 3.5, y: 6.5, width: 17, height: 11, rx: 1.5 }],
    ["path", { d: "M8.5 14.5v-5h7v5", ...SOLID_STROKE }],
  ],
};

export default NpmIcon;
