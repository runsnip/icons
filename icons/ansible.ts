import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A circle with a thickened A whose bar runs to its foot: Ansible. From the files set. */
export const AnsibleIcon: Icon = {
  name: "AnsibleIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.3 16.5 12 7.5l3.7 9-5.4-4.2", ...SOLID_STROKE }],
  ],
};

export default AnsibleIcon;
