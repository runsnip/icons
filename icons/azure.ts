import type { Icon } from "../types";
import { SOLID } from "../system";

/** A slanted blade with a small filled wedge: Azure. From the files set. */
export const AzureIcon: Icon = {
  name: "AzureIcon",
  node: [
    ["path", { d: "M10 4.5h4l6.5 15h-6Z" }],
    ["path", { d: "M3.5 19.5 9 10l2.5 6-2.5 3.5Z", ...SOLID }],
  ],
};

export default AzureIcon;
