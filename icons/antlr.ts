import type { Icon } from "../types";
import { SOLID } from "../system";

/** A parse tree, its root filled: an ANTLR grammar. From the files set. */
export const AntlrIcon: Icon = {
  name: "AntlrIcon",
  node: [
    ["circle", { cx: 6.5, cy: 17.5, r: 2.5 }],
    ["circle", { cx: 17.5, cy: 17.5, r: 2.5 }],
    ["path", { d: "M10.8 7.9 7.6 15.2M13.2 7.9l3.2 7.3" }],
    ["circle", { cx: 12, cy: 6, r: 2.3, ...SOLID }],
  ],
};

export default AntlrIcon;
