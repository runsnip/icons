import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Jinja: a torii gate, its top beam the mark. From the files set. */
export const JinjaIcon: Icon = {
  name: "JinjaIcon",
  node: [
    ["path", { d: "M5.5 9.5h13M8 6.5v14M16 6.5v14" }],
    ["path", { d: "M3.5 5c3 1.3 14 1.3 17 0", ...SOLID_STROKE }],
  ],
};

export default JinjaIcon;
