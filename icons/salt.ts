import type { Icon } from "../types";
import { SOLID } from "../system";

/** Salt: a shaker, its cap filled. From the files set. */
export const SaltIcon: Icon = {
  name: "SaltIcon",
  node: [
    ["path", { d: "M6.5 11h11L16 20.5H8Z" }],
    ["path", { d: "M7 9.5a5 5 0 0 1 10 0Z", ...SOLID }],
  ],
};

export default SaltIcon;
