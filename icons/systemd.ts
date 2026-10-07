import type { Icon } from "../types";
import { SOLID } from "../system";

/** systemd: square brackets, the unit between them the mark. From the files set. */
export const SystemdIcon: Icon = {
  name: "SystemdIcon",
  node: [
    ["path", { d: "M8 5.5H5.5v13H8M16 5.5h2.5v13H16" }],
    ["circle", { cx: 12, cy: 12, r: 3, ...SOLID }],
  ],
};

export default SystemdIcon;
