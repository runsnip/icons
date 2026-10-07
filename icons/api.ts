import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A request and its response, two arrows with thickened heads: an API. From the files set. */
export const ApiIcon: Icon = {
  name: "ApiIcon",
  node: [
    ["path", { d: "M4.5 9h14.5M19.5 15H5" }],
    ["path", { d: "M15.5 6l3 3-3 3M8.5 12l-3 3 3 3", ...SOLID_STROKE }],
  ],
};

export default ApiIcon;
