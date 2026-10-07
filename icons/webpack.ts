import type { Icon } from "../types";
import { SOLID } from "../system";

/** webpack: a cube within a cube, the inner one filled. From the files set. */
export const WebpackIcon: Icon = {
  name: "WebpackIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 7.75v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M12 8.5 15 10.25v3.5L12 15.5l-3-1.75v-3.5Z", ...SOLID }],
  ],
};

export default WebpackIcon;
