import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gradle: an elephant, its eye the mark. From the files set. */
export const GradleIcon: Icon = {
  name: "GradleIcon",
  node: [
    ["path", { d: "M4.5 19V13a6 6 0 0 1 6-6h4a5 5 0 0 1 5 5v3.5M4.5 19h3v-3h6v3h3v-6.5" }],
    ["circle", { cx: 15, cy: 10.5, r: 1.3, ...SOLID }],
  ],
};

export default GradleIcon;
