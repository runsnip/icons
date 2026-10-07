import type { Icon } from "../types";
import { SOLID } from "../system";

/** Seeders: a sprout over filled ground. From the files set. */
export const SeedersIcon: Icon = {
  name: "SeedersIcon",
  node: [
    ["path", { d: "M12 17.5V11M12 13C12 9.5 9.5 7.5 5 7.5c0 4 2.5 5.5 7 5.5ZM12 11c0-3.5 2-6 7-6 0 4-2.5 6-7 6Z" }],
    ["ellipse", { cx: 12, cy: 19, rx: 4.5, ry: 1.5, ...SOLID }],
  ],
};

export default SeedersIcon;
