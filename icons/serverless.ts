import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Serverless: three staggered bars, the top one thickened. From the files set. */
export const ServerlessIcon: Icon = {
  name: "ServerlessIcon",
  node: [
    ["path", { d: "M8.5 6.5h11", ...SOLID_STROKE }],
    ["path", { d: "M6.5 12h11M4.5 17.5h11" }],
  ],
};

export default ServerlessIcon;
