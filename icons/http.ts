import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** HTTP requests: a request out and a response back, the request's head the mark. From the files set. */
export const HttpIcon: Icon = {
  name: "HttpIcon",
  node: [
    ["path", { d: "M4.5 8.5H18M19.5 15.5H6M9 12.5l-3 3 3 3" }],
    ["path", { d: "M15 5.5l3 3-3 3", ...SOLID_STROKE }],
  ],
};

export default HttpIcon;
