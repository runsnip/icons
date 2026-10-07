import type { Icon } from "../types";
import { SOLID } from "../system";

/** Rocket: a rocket and its fins, the porthole filled. From the files set. */
export const RocketIcon: Icon = {
  name: "RocketIcon",
  node: [
    ["path", { d: "M12 3.5c3 2.2 4 5.2 4 8.5v4.5H8V12c0-3.3 1-6.3 4-8.5ZM8 13l-3 3v3.5l3-1.5M16 13l3 3v3.5l-3-1.5" }],
    ["circle", { cx: 12, cy: 10, r: 1.8, ...SOLID }],
  ],
};

export default RocketIcon;
