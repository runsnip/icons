import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Text split by vertical lines into columns. From the sheets set. */
export const TextToColumnsIcon: Icon = {
  name: "TextToColumnsIcon",
  node: [
    ["path", { d: "M3.5 6h5.5M3.5 12h4M3.5 18h5.5M15 6h5.5M15 12h5.5M15 18h3.5" }],
    ["path", { d: "M12 3.5v17", ...SOLID_STROKE }],
  ],
};

export default TextToColumnsIcon;
