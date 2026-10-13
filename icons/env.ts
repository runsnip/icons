import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Configuration variables: braces holding an equals sign — a name and its value — the sign the mark. From the ops set. */
export const EnvIcon: Icon = {
  name: "EnvIcon",
  node: [
    ["path", { d: "M8 4.5H7A1.5 1.5 0 0 0 5.5 6v4.25L3.5 12l2 1.75V18A1.5 1.5 0 0 0 7 19.5h1M16 4.5h1A1.5 1.5 0 0 1 18.5 6v4.25l2 1.75-2 1.75V18a1.5 1.5 0 0 1-1.5 1.5h-1" }],
    ["path", { d: "M9.5 10h5M9.5 14h5", ...SOLID_STROKE }],
  ],
};

export default EnvIcon;
