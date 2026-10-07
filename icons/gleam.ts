import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gleam: a star with a face, its eyes the mark. From the files set. */
export const GleamIcon: Icon = {
  name: "GleamIcon",
  node: [
    ["path", { d: "M12 4.3L14.29 9.74L20.18 10.24L15.71 14.11L17.05 19.86L12 16.8L6.95 19.86L8.29 14.11L3.82 10.24L9.71 9.74Z" }],
    ["path", { d: "M9.4 12.6a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0ZM12.4 12.6a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 1 0-2.2 0Z", ...SOLID }],
  ],
};

export default GleamIcon;
