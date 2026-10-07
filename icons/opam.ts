import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** opam, OCaml's package manager: a crate, the camel's two humps on its lid the mark. From the files set. */
export const OpamIcon: Icon = {
  name: "OpamIcon",
  node: [
    ["rect", { x: 3.5, y: 10, width: 17, height: 10.5, rx: 2 }],
    ["path", { d: "M10 14.5h4" }],
    ["path", { d: "M4.5 10C5.5 5.5 8.5 4.5 10.5 7 12.5 4.5 16.5 5 17.5 10", ...SOLID_STROKE }],
  ],
};

export default OpamIcon;
