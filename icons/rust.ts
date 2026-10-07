import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rust: a gear's ring and teeth, a thickened R inside. From the files set. */
export const RustIcon: Icon = {
  name: "RustIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 6.5 }],
    ["path", { d: "M12 5.5V3.5M12 18.5v2M18.5 12h2M5.5 12h-2M16.6 7.4l1.4-1.4M16.6 16.6l1.4 1.4M7.4 16.6 6 18M7.4 7.4 6 6" }],
    ["path", { d: "M10 15.5v-7h2.4a1.75 1.75 0 0 1 0 3.5H10M12.4 12l2 3.5", ...SOLID_STROKE }],
  ],
};

export default RustIcon;
