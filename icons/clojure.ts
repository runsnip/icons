import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Clojure: a lambda, the mark, in a circle. From the files set. */
export const ClojureIcon: Icon = {
  name: "ClojureIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.5 7h1.5l5.5 10M12.4 11.5 8.5 17", ...SOLID_STROKE }],
  ],
};

export default ClojureIcon;
