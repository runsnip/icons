import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Ember: the letter e, its bar the mark. From the files set. */
export const EmberIcon: Icon = {
  name: "EmberIcon",
  node: [
    ["path", { d: "M17.5 12a5.5 5.5 0 1 0-1.6 3.9" }],
    ["path", { d: "M6.5 12h11", ...SOLID_STROKE }],
  ],
};

export default EmberIcon;
