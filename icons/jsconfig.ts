import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A JavaScript config: config braces, the J between them the mark. From the files set. */
export const JsconfigIcon: Icon = {
  name: "JsconfigIcon",
  node: [
    ["path", { d: "M8 4.5c-2 0-2.5 1-2.5 2.5v2.5c0 1.5-1 3-2 3 1 0 2 1.5 2 3v2.5c0 1.5.5 2.5 2.5 2.5" }],
    ["path", { d: "M16 4.5c2 0 2.5 1 2.5 2.5v2.5c0 1.5 1 3 2 3-1 0-2 1.5-2 3v2.5c0 1.5-.5 2.5-2.5 2.5" }],
    ["path", { d: "M10.5 8.5h4M13.5 8.5v5.5a2 2 0 0 1-4 0", ...SOLID_STROKE }],
  ],
};

export default JsconfigIcon;
