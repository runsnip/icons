import type { Icon } from "../types";
import { SOLID } from "../system";

/** Playwright: a theatre mask, its eyes the mark. From the files set. */
export const PlaywrightIcon: Icon = {
  name: "PlaywrightIcon",
  node: [
    ["path", { d: "M4.5 4.5h15v7a7.5 7.5 0 0 1-15 0Z" }],
    ["path", { d: "M9 14.5a3.5 3.5 0 0 0 6 0" }],
    ["circle", { cx: 9, cy: 9.5, r: 1.6, ...SOLID }],
    ["circle", { cx: 15, cy: 9.5, r: 1.6, ...SOLID }],
  ],
};

export default PlaywrightIcon;
