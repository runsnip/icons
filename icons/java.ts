import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Java: a cup of coffee, its steam the mark. From the files set. */
export const JavaIcon: Icon = {
  name: "JavaIcon",
  node: [
    ["path", { d: "M5.5 11h11v4.5a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4Z" }],
    ["path", { d: "M16.5 12.5H18a2 2 0 0 1 0 4h-1.5" }],
    ["path", { d: "M9 4c-1 1.5 1 2.5 0 4M13 4c-1 1.5 1 2.5 0 4", ...SOLID_STROKE }],
  ],
};

export default JavaIcon;
