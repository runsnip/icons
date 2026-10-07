import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Nuxt: a mountain with a smaller peak beside it, the small peak the mark. From the files set. */
export const NuxtIcon: Icon = {
  name: "NuxtIcon",
  node: [
    ["path", { d: "M8.5 18.5h-5L10 7l3 5.3" }],
    ["path", { d: "M10.5 18.5 15.5 10l5 8.5Z", ...SOLID_STROKE }],
  ],
};

export default NuxtIcon;
