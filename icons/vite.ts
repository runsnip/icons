import type { Icon } from "../types";
import { SOLID } from "../system";

/** Vite: a bolt inside an inverted triangle, the bolt the mark. From the files set. */
export const ViteIcon: Icon = {
  name: "ViteIcon",
  node: [
    ["path", { d: "M3.5 5h17L12 20.5Z" }],
    ["polygon", { points: "13.5,7 9,12.5 12,12.5 11,17 15.5,11 12.5,11", ...SOLID }],
  ],
};

export default ViteIcon;
