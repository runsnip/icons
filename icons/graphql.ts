import type { Icon } from "../types";
import { SOLID } from "../system";

/** GraphQL: a hexagon round a triangle, its six nodes the mark. From the files set. */
export const GraphqlIcon: Icon = {
  name: "GraphqlIcon",
  node: [
    ["path", { d: "M12 5.2L17.89 8.6L17.89 15.4L12 18.8L6.11 15.4L6.11 8.6Z" }],
    ["path", { d: "M12 5.2L17.89 15.4L6.11 15.4Z" }],
    ["path", { d: "M10.5 5.2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM16.39 8.6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM16.39 15.4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM10.5 18.8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM4.61 15.4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0ZM4.61 8.6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0Z", ...SOLID }],
  ],
};

export default GraphqlIcon;
