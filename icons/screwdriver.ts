import type { Icon } from "../types";
import { SOLID } from "../system";

/** Screwdriver: its shaft, the handle filled. From the files set. */
export const ScrewdriverIcon: Icon = {
  name: "ScrewdriverIcon",
  node: [
    ["path", { d: "M11.5 12.5 4.5 19.5" }],
    ["path", { d: "M14 4.5a1.5 1.5 0 0 1 2.1 0l3.4 3.4a1.5 1.5 0 0 1 0 2.1L15 14.5 9.5 9Z", ...SOLID }],
  ],
};

export default ScrewdriverIcon;
