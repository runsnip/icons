import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** CoffeeScript: a cup of coffee, its steam the mark. From the files set. */
export const CoffeeIcon: Icon = {
  name: "CoffeeIcon",
  node: [
    ["path", { d: "M4.5 10h11v4.5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5ZM15.5 11.5h1.5a2.5 2.5 0 0 1 0 5h-1.5" }],
    ["path", { d: "M8 3.8v3M12 3.8v3", ...SOLID_STROKE }],
  ],
};

export default CoffeeIcon;
