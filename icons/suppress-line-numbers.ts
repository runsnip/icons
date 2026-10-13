import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Suppress line numbers: numbered lines, the paragraph in the middle emphasised and left without its number. From the insert set. */
export const SuppressLineNumbersIcon: Icon = {
  name: "SuppressLineNumbersIcon",
  node: [
    ["path", { d: "M10 6h10.5M10 18h10.5M8 3.5v17M3.5 6h2M3.5 18h2" }],
    ["path", { d: "M10 12h10.5", ...SOLID_STROKE }],
  ],
};

export default SuppressLineNumbersIcon;
