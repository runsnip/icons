import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Tailwind CSS: two waves, the upper one the mark. From the files set. */
export const TailwindcssIcon: Icon = {
  name: "TailwindcssIcon",
  node: [
    ["path", { d: "M3.5 16.5c1.5-3 3.5-4 6-3s3 3 6.5 1" }],
    ["path", { d: "M8 10c1.5-3 3.5-4 6-3s3 3 6.5 1", ...SOLID_STROKE }],
  ],
};

export default TailwindcssIcon;
