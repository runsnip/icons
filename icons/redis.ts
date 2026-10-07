import type { Icon } from "../types";
import { SOLID } from "../system";

/** Redis: a stack of flat layers, a star on the top one filled. From the files set. */
export const RedisIcon: Icon = {
  name: "RedisIcon",
  node: [
    ["path", { d: "M3.5 8.5 12 5l8.5 3.5L12 12Z" }],
    ["path", { d: "M3.5 12.5 12 16l8.5-3.5M3.5 16.5 12 20l8.5-3.5" }],
    ["path", { d: "M12 6l1.2 1.6 2.8.9-2.8.9L12 11l-1.2-1.6-2.8-.9 2.8-.9Z", ...SOLID }],
  ],
};

export default RedisIcon;
