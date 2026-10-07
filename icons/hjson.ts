import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Hjson: braces round an h, the h the mark. From the files set. */
export const HjsonIcon: Icon = {
  name: "HjsonIcon",
  node: [
    ["path", { d: "M7 4.5H6.5A2 2 0 0 0 4.5 6.5v3.5L3.5 12l1 2v3.5a2 2 0 0 0 2 2H7M17 4.5h.5a2 2 0 0 1 2 2v3.5l1 2-1 2v3.5a2 2 0 0 1-2 2H17" }],
    ["path", { d: "M10 8v8M10 12.5a2 2 0 0 1 4 0V16", ...SOLID_STROKE }],
  ],
};

export default HjsonIcon;
