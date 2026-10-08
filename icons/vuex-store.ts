import type { Icon } from "../types";
import { SOLID } from "../system";

/** A Vuex store: a V over an X, the V's notch the mark. From the files set. */
export const VuexStoreIcon: Icon = {
  name: "VuexStoreIcon",
  node: [
    ["path", { d: "M4.5 4.5 12 13.5l7.5-9M7.5 20.5l4.5-5 4.5 5" }],
    ["path", { d: "M9.5 4.5h5L12 7.5Z", ...SOLID }],
  ],
};

export default VuexStoreIcon;
