import type { Icon } from "../types";
import { SOLID } from "../system";

/** Light theme: a sun. From the collab set. */
export const SunIcon: Icon = {
  name: "SunIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 3.5, ...SOLID }],
    ["path", { d: "M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6" }],
  ],
};

export default SunIcon;
