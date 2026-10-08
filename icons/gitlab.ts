import type { Icon } from "../types";
import { SOLID } from "../system";

/** GitLab: the tanuki's head, its snout the mark. From the files set. */
export const GitlabIcon: Icon = {
  name: "GitlabIcon",
  node: [
    ["path", { d: "M12 20 3.5 13.5 5.5 4.5 8.5 11h7l3-6.5 2 9Z" }],
    ["path", { d: "M10 11h4l-2 3Z", ...SOLID }],
  ],
};

export default GitlabIcon;
