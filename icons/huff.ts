import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Huff: an H in the hexagon of the EVM, the H the mark. From the files set. */
export const HuffIcon: Icon = {
  name: "HuffIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 4.25v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M9.5 8.5v7M14.5 8.5v7M9.5 12h5", ...SOLID_STROKE }],
  ],
};

export default HuffIcon;
