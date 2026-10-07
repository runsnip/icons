import type { Icon } from "../types";
import { SOLID } from "../system";

/** vanilla-extract: an ice-cream cone, the cherry on its scoop the mark. From the files set. */
export const VanillaExtractIcon: Icon = {
  name: "VanillaExtractIcon",
  node: [
    ["path", { d: "M5 13a7 7 0 0 1 14 0Z" }],
    ["path", { d: "M6 13h12l-6 7.5Z" }],
    ["circle", { cx: 12, cy: 5.5, r: 2, ...SOLID }],
  ],
};

export default VanillaExtractIcon;
