import type { Icon } from "../types";
import { SOLID } from "../system";

/** Twig templates: a twig with one leaf, the leaf the mark. From the files set. */
export const TwigIcon: Icon = {
  name: "TwigIcon",
  node: [
    ["path", { d: "M5 20.5c0-6 3.5-10 9-11.5M9 14.5C7 13.5 5.5 11.5 5.5 9" }],
    ["path", { d: "M14 9.5c.3-3 2.5-5.3 6.5-6-.3 3.6-2.6 6-6.5 6Z", ...SOLID }],
  ],
};

export default TwigIcon;
