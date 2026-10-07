import type { Icon } from "../types";
import { SOLID } from "../system";

/** Deployment config: a rocket lifting off, its flame the mark. From the files set. */
export const DeploymentIcon: Icon = {
  name: "DeploymentIcon",
  node: [
    ["path", { d: "M12 3.5c3 2 4.5 5.5 4.5 9.5L15 16H9l-1.5-3c0-4 1.5-7.5 4.5-9.5Z" }],
    ["path", { d: "M7.5 12.5 5 15.5V18l3.5-1.5M16.5 12.5l2.5 3V18l-3.5-1.5" }],
    ["path", { d: "M10 17.5h4l-2 3Z", ...SOLID }],
  ],
};

export default DeploymentIcon;
