import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** nodemon: Node's hexagon with the arrow of a restart, the arrow the mark. From the files set. */
export const NodemonIcon: Icon = {
  name: "NodemonIcon",
  node: [
    ["path", { d: "M12 3.5L19.36 7.75L19.36 16.25L12 20.5L4.64 16.25L4.64 7.75Z" }],
    ["path", { d: "M15.17 10.52A3.5 3.5 0 1 0 15.03 13.75M15.4 7.8v2.9h-2.9", ...SOLID_STROKE }],
  ],
};

export default NodemonIcon;
