import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A dump: a tray, what is dumped into it the mark. From the files set. */
export const DumpIcon: Icon = {
  name: "DumpIcon",
  node: [
    ["path", { d: "M3.5 13.5v5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5M12 4V15" }],
    ["path", { d: "M8 11l4 4 4-4", ...SOLID_STROKE }],
  ],
};

export default DumpIcon;
