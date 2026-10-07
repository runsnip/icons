import type { Icon } from "../types";
import { SOLID } from "../system";

/** Routes: a signpost, the sign pointing on filled. From the files set. */
export const RoutesIcon: Icon = {
  name: "RoutesIcon",
  node: [
    ["path", { d: "M12 3.5v17M12 12.5H6.5l-3 2.5 3 2.5H12" }],
    ["path", { d: "M12 4.5h5.5l3 2.5-3 2.5H12Z", ...SOLID }],
  ],
};

export default RoutesIcon;
