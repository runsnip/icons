import type { Icon } from "../types";
import { SOLID } from "../system";

/** Mercurial: a drop of mercury with two droplets breaking off, filled. From the files set. */
export const MercurialIcon: Icon = {
  name: "MercurialIcon",
  node: [
    ["circle", { cx: 10, cy: 13.5, r: 6.5 }],
    ["path", { d: "M15.5 6.5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM17.3 11.5a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z", ...SOLID }],
  ],
};

export default MercurialIcon;
