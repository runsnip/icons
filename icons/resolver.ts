import type { Icon } from "../types";
import { SOLID } from "../system";

/** Resolvers: two paths meeting and resolving to one filled point. From the files set. */
export const ResolverIcon: Icon = {
  name: "ResolverIcon",
  node: [
    ["path", { d: "M4.5 6.5h3.5l4.5 5.5M4.5 17.5h3.5l4.5-5.5h3" }],
    ["circle", { cx: 18, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default ResolverIcon;
