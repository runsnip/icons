import type { Icon } from "../types";
import { SOLID } from "../system";

/** Snakemake: a winding body, the snake's head filled. From the files set. */
export const SnakemakeIcon: Icon = {
  name: "SnakemakeIcon",
  node: [
    ["path", { d: "M5 18.5h9a2.75 2.75 0 0 0 0-5.5h-4a2.75 2.75 0 0 1 0-5.5h4.5" }],
    ["circle", { cx: 17, cy: 7.5, r: 2.5, ...SOLID }],
  ],
};

export default SnakemakeIcon;
