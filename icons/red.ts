import type { Icon } from "../types";
import { SOLID } from "../system";

/** Red: a triangle, a smaller one turned down inside it filled. From the files set. */
export const RedIcon: Icon = {
  name: "RedIcon",
  node: [
    ["path", { d: "M12 4 20.5 19.5h-17Z" }],
    ["path", { d: "M9 12.5h6L12 17Z", ...SOLID }],
  ],
};

export default RedIcon;
