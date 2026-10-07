import type { Icon } from "../types";
import { SOLID } from "../system";

/** Repository host config: a bound book, the cog on its cover the mark. From the files set. */
export const RepoConfigIcon: Icon = {
  name: "RepoConfigIcon",
  node: [
    ["path", { d: "M5 18V6a2.5 2.5 0 0 1 2.5-2.5h12v17h-12A2.5 2.5 0 0 1 5 18a2.5 2.5 0 0 1 2.5-2.5h12" }],
    ["path", { d: "M12.75 6.1L13.9 7.51L15.69 7.8L15.05 9.5L15.69 11.2L13.9 11.49L12.75 12.9L11.6 11.49L9.81 11.2L10.45 9.5L9.81 7.8L11.6 7.51Z", ...SOLID }],
  ],
};

export default RepoConfigIcon;
