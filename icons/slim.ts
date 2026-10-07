import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Slim: indented lines of a template, its top tag thickened. From the files set. */
export const SlimIcon: Icon = {
  name: "SlimIcon",
  node: [
    ["path", { d: "M4.5 6.5h6", ...SOLID_STROKE }],
    ["path", { d: "M8.5 12h8M8.5 17.5h11" }],
  ],
};

export default SlimIcon;
