import type { Icon } from "../types";
import { SOLID } from "../system";

/** A peak on a curved base with a small filled flame: Astro. From the files set. */
export const AstroIcon: Icon = {
  name: "AstroIcon",
  node: [
    ["path", { d: "M5.5 16 10.3 4.5h3.4L18.5 16c-2-.9-4.2-1.3-6.5-1.3S7.5 15.1 5.5 16Z" }],
    ["path", { d: "M9.2 17.6c0 1.7 1.3 2.9 2.8 2.9s2.8-1.2 2.8-2.9c-.9.4-1.8.6-2.8.6s-1.9-.2-2.8-.6Z", ...SOLID }],
  ],
};

export default AstroIcon;
