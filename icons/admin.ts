import type { Icon } from "../types";
import { SOLID } from "../system";

/** A person with a small filled shield: administration. From the files set. */
export const AdminIcon: Icon = {
  name: "AdminIcon",
  node: [
    ["circle", { cx: 9.5, cy: 8, r: 3.5 }],
    ["path", { d: "M3.5 19.5a6 6 0 0 1 9.5-4.8" }],
    ["path", { d: "M17 11.5l3.5 1.3v2.6c0 2.3-1.5 3.8-3.5 4.6-2-.8-3.5-2.3-3.5-4.6v-2.6Z", ...SOLID }],
  ],
};

export default AdminIcon;
