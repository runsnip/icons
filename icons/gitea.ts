import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gitea: a teacup, the diamond in it the mark. From the files set. */
export const GiteaIcon: Icon = {
  name: "GiteaIcon",
  node: [
    ["path", { d: "M4 7.5h12v5a5.5 5.5 0 0 1-5.5 5.5h-1A5.5 5.5 0 0 1 4 12.5ZM16 9h1.5a2.5 2.5 0 0 1 0 5H16M5.5 20.5h9" }],
    ["path", { d: "M10 10.5l2 2-2 2-2-2Z", ...SOLID }],
  ],
};

export default GiteaIcon;
