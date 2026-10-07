import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cloud workspace: a cloud, the prompt in it the mark. From the files set. */
export const CloudWorkspaceIcon: Icon = {
  name: "CloudWorkspaceIcon",
  node: [
    ["path", { d: "M7.45 17.72a3.48 3.48 0 0 1-.52-6.97 4.79 4.79 0 0 1 9.32-1.22A4.09 4.09 0 0 1 16.16 17.72Z" }],
    ["path", { d: "M10.25 11.75 12.5 13.5l-2.25 1.75", ...SOLID_STROKE }],
  ],
};

export default CloudWorkspaceIcon;
