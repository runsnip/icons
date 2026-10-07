import type { Icon } from "../types";
import { SOLID } from "../system";

/** Chromatic: a wheel in three, one sector the mark. From the files set. */
export const ChromaticIcon: Icon = {
  name: "ChromaticIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 12V3.5M12 12l7.36 4.25M12 12l-7.36 4.25" }],
    ["path", { d: "M12 12V7a5 5 0 0 1 4.33 7.5Z", ...SOLID }],
  ],
};

export default ChromaticIcon;
