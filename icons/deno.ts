import type { Icon } from "../types";
import { SOLID } from "../system";

/** Deno: the dinosaur in its ring, its eye solid. From the files set. */
export const DenoIcon: Icon = {
  name: "DenoIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8 19.5v-7a4.5 4 0 0 1 4.5-4h1.5a2.75 2.75 0 0 1 0 5.5h-1.5v6.4" }],
    ["circle", { cx: 13.75, cy: 11, r: 1.2, ...SOLID }],
  ],
};

export default DenoIcon;
