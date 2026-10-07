import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Nx: the letters NX in a frame. From the files set. */
export const NxIcon: Icon = {
  name: "NxIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 15.5v-7l4 7v-7M13.5 8.5l4 7M17.5 8.5l-4 7", ...SOLID_STROKE }],
  ],
};

export default NxIcon;
