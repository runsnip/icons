import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Razor views: a razor blade, its slot the mark. From the files set. */
export const RazorIcon: Icon = {
  name: "RazorIcon",
  node: [
    ["rect", { x: 3.5, y: 7, width: 17, height: 10, rx: 2 }],
    ["path", { d: "M3.5 12h1.5M19 12h1.5" }],
    ["path", { d: "M8.5 12h7", ...SOLID_STROKE }],
  ],
};

export default RazorIcon;
