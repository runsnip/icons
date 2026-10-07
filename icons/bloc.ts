import type { Icon } from "../types";
import { SOLID } from "../system";

/** BLoC: a cube, its top face the mark. From the files set. */
export const BlocIcon: Icon = {
  name: "BlocIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 7.5v9L12 20.5l-7.5-4v-9Z" }],
    ["path", { d: "M12 11.5v9" }],
    ["path", { d: "M12 3.5 19.5 7.5 12 11.5 4.5 7.5Z", ...SOLID }],
  ],
};

export default BlocIcon;
