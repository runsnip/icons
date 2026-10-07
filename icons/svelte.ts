import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Svelte: two hooks forming an S, the stroke between them the mark. From the files set. */
export const SvelteIcon: Icon = {
  name: "SvelteIcon",
  node: [
    ["path", { d: "M16.5 6.5a4 4 0 0 0-5.3-1.4L7.2 7.6a3.5 3.5 0 0 0 .3 6.1" }],
    ["path", { d: "M7.5 17.5a4 4 0 0 0 5.3 1.4l4-2.5a3.5 3.5 0 0 0-.3-6.1" }],
    ["path", { d: "M14 9.5 10 14.5", ...SOLID_STROKE }],
  ],
};

export default SvelteIcon;
