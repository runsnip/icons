import type { Icon } from "../types";
import { SOLID } from "../system";

/** A diamond with a filled diamond inside: Bazel. From the files set. */
export const BazelIcon: Icon = {
  name: "BazelIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 12 12 20.5 3.5 12Z" }],
    ["path", { d: "M12 8.5 15.5 12 12 15.5 8.5 12Z", ...SOLID }],
  ],
};

export default BazelIcon;
