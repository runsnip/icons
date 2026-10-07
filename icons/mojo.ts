import type { Icon } from "../types";
import { SOLID } from "../system";

/** Mojo: a flame with its core, the core the mark. From the files set. */
export const MojoIcon: Icon = {
  name: "MojoIcon",
  node: [
    ["path", { d: "M12 20.5a6 6 0 0 1-6-6c0-4 3-5.5 3-10 3 1.5 4.5 4 4.5 6.5 1-1 1.5-2 1.5-3 2 1.5 3 4 3 6.5a6 6 0 0 1-6 6Z" }],
    ["path", { d: "M12 20.5a2.5 2.5 0 0 1-2.5-2.5c0-1.7 2.5-3.5 2.5-3.5s2.5 1.8 2.5 3.5a2.5 2.5 0 0 1-2.5 2.5Z", ...SOLID }],
  ],
};

export default MojoIcon;
