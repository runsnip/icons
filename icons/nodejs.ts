import type { Icon } from "../types";
import { SOLID } from "../system";

/** Node.js: a hexagon with a filled hexagon inside it. From the files set. */
export const NodejsIcon: Icon = {
  name: "NodejsIcon",
  node: [
    ["path", { d: "M12 3.5L19.36 7.75L19.36 16.25L12 20.5L4.64 16.25L4.64 7.75Z" }],
    ["path", { d: "M12 8.5L15.03 10.25L15.03 13.75L12 15.5L8.97 13.75L8.97 10.25Z", ...SOLID }],
  ],
};

export default NodejsIcon;
