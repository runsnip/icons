import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Objective-C: the square brackets of a message with a C inside, the C the mark. From the files set. */
export const ObjectiveCIcon: Icon = {
  name: "ObjectiveCIcon",
  node: [
    ["path", { d: "M7 4.5H4.5v15H7M17 4.5h2.5v15H17" }],
    ["path", { d: "M14.5 9a3.5 3.5 0 1 0 0 6", ...SOLID_STROKE }],
  ],
};

export default ObjectiveCIcon;
