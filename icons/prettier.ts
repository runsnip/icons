import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Prettier: lines of code laid out, the last one set in place the mark. From the files set. */
export const PrettierIcon: Icon = {
  name: "PrettierIcon",
  node: [
    ["path", { d: "M4.5 5h9M4.5 9.5h4.5M12 9.5h7.5M4.5 14h11M4.5 18.5h5" }],
    ["path", { d: "M13.5 18.5h6", ...SOLID_STROKE }],
  ],
};

export default PrettierIcon;
