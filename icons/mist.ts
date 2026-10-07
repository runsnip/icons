import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Mist: banks of fog, the middle one the mark. From the files set. */
export const MistIcon: Icon = {
  name: "MistIcon",
  node: [
    ["path", { d: "M4.5 7.5h10M9.5 16.5h10" }],
    ["path", { d: "M6.5 12h11", ...SOLID_STROKE }],
  ],
};

export default MistIcon;
