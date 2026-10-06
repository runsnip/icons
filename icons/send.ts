import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Send: a paper plane. From the collab set. */
export const SendIcon: Icon = {
  name: "SendIcon",
  node: [
    ["path", { d: "M20.5 3.5 3.5 10l7 3.5 3.5 7Z" }],
    ["path", { d: "M20.5 3.5 10.5 13.5", ...SOLID_STROKE }],
  ],
};

export default SendIcon;
