import type { Icon } from "../types";
import { SOLID } from "../system";

/** Git: a diamond, the branch inside it the mark. From the files set. */
export const GitIcon: Icon = {
  name: "GitIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 12 12 20.5 3.5 12Z" }],
    ["path", { d: "M8.5 8.5 12 12v3.5M12 12h3" }],
    ["path", { d: "M10.5 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM13.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0Z", ...SOLID }],
  ],
};

export default GitIcon;
