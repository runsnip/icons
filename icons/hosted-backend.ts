import type { Icon } from "../types";
import { SOLID } from "../system";

/** A hosted backend (Supabase and the like): a database, the bolt on it the mark. From the files set. */
export const HostedBackendIcon: Icon = {
  name: "HostedBackendIcon",
  node: [
    ["ellipse", { cx: 12, cy: 6.5, rx: 7, ry: 3 }],
    ["path", { d: "M5 6.5v11c0 1.7 3.1 3 7 3s7-1.3 7-3v-11" }],
    ["path", { d: "M13 10.5 9.5 15h3l-1 4 3.5-4.5h-3Z", ...SOLID }],
  ],
};

export default HostedBackendIcon;
