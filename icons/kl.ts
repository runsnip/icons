import type { Icon } from "../types";
import { SOLID } from "../system";

/** KL (Kaleidoscope): a hexagon around its facet, the facet the mark. From the files set. */
export const KlIcon: Icon = {
  name: "KlIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 4.25v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M12 8l3.8 6.5H8.2Z", ...SOLID }],
  ],
};

export default KlIcon;
