import type { Icon } from "../types";
import { SOLID } from "../system";

/** A turning arrow round a filled play triangle: a file run automatically. From the files set. */
export const AutorunIcon: Icon = {
  name: "AutorunIcon",
  node: [
    ["path", { d: "M19.5 12a7.5 7.5 0 1 1-2.2-5.3M17.5 3.5v3.7h-3.7" }],
    ["path", { d: "M10.3 8.8v6.4l5-3.2Z", ...SOLID }],
  ],
};

export default AutorunIcon;
