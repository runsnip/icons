import type { Icon } from "../types";
import { SOLID } from "../system";

/** Two peaks under a filled sun: Biome. From the files set. */
export const BiomeIcon: Icon = {
  name: "BiomeIcon",
  node: [
    ["path", { d: "M3.5 19.5 9.5 8l3.5 6.5 2.5-4 5 9Z" }],
    ["circle", { cx: 16.8, cy: 6, r: 2, ...SOLID }],
  ],
};

export default BiomeIcon;
