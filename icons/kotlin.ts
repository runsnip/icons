import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Kotlin: its notched square, the split across it the mark. From the files set. */
export const KotlinIcon: Icon = {
  name: "KotlinIcon",
  node: [
    ["path", { d: "M4.5 4.5h15L12 12l7.5 7.5h-15Z" }],
    ["path", { d: "M4.5 19.5 12 12", ...SOLID_STROKE }],
  ],
};

export default KotlinIcon;
