import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** OCaml: a camel, its humps the mark. From the files set. */
export const OcamlIcon: Icon = {
  name: "OcamlIcon",
  node: [
    ["path", { d: "M4.5 12.5v7M13.5 12.5v7M4.5 15.5h9M13.5 12.5c2.5 0 2.5-5 5.5-5h1" }],
    ["path", { d: "M4.5 12.5c1-4.5 3.5-4.5 4.5 0 1-4.5 3.5-4.5 4.5 0", ...SOLID_STROKE }],
  ],
};

export default OcamlIcon;
