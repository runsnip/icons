import type { Icon } from "../types";
import { SOLID } from "../system";

/** A repository: a branch leaving its trunk, the head of the branch filled. From the files set. */
export const RepositoryIcon: Icon = {
  name: "RepositoryIcon",
  node: [
    ["circle", { cx: 7, cy: 6.5, r: 2 }],
    ["circle", { cx: 7, cy: 17.5, r: 2 }],
    ["path", { d: "M7 8.5v7M7 14c0-3 2-4.5 6-4.5h1.5" }],
    ["circle", { cx: 17.5, cy: 9.5, r: 2.5, ...SOLID }],
  ],
};

export default RepositoryIcon;
