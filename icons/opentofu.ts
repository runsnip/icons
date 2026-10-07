import type { Icon } from "../types";
import { SOLID } from "../system";

/** OpenTofu: a block of tofu, its top face the mark. From the files set. */
export const OpentofuIcon: Icon = {
  name: "OpentofuIcon",
  node: [
    ["path", { d: "M4 7.5v9l8 4 8-4v-9M12 11.5v9" }],
    ["path", { d: "M12 3.5 20 7.5 12 11.5 4 7.5Z", ...SOLID }],
  ],
};

export default OpentofuIcon;
