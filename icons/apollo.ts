import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An open ring round a thickened A: Apollo GraphQL. From the files set. */
export const ApolloIcon: Icon = {
  name: "ApolloIcon",
  node: [
    ["path", { d: "M19.36 7.75A8.5 8.5 0 1 1 14.2 3.79" }],
    ["path", { d: "M8.8 16 12 8l3.2 8M10 13.2h4", ...SOLID_STROKE }],
  ],
};

export default ApolloIcon;
