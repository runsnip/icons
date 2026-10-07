import type { Icon } from "../types";
import { SOLID } from "../system";

/** clangd: the letter C round a lightning bolt, the bolt the mark. From the files set. */
export const ClangdIcon: Icon = {
  name: "ClangdIcon",
  node: [
    ["path", { d: "M17.3 6.7A7.5 7.5 0 1 0 17.3 17.3" }],
    ["path", { d: "M12.5 7.5 9 12.5h2.5l-1 4 3.5-5h-2.5Z", ...SOLID }],
  ],
};

export default ClangdIcon;
