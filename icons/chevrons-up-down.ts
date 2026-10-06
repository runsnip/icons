import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Choose from a list: chevrons up and down. From the collab set. */
export const ChevronsUpDownIcon: Icon = {
  name: "ChevronsUpDownIcon",
  node: [
    ["path", { d: "M7.5 9 12 4.5 16.5 9M7.5 15 12 19.5 16.5 15", ...SOLID_STROKE }],
  ],
};

export default ChevronsUpDownIcon;
