import type { Icon } from "../types";
import { NgrxIcon } from "./ngrx";

/** NgRx state: NgrxIcon's drawing, a kind of its own in its own colour. From the files set. */
export const NgrxStateIcon: Icon = {
  name: "NgrxStateIcon",
  node: NgrxIcon.node,
};

export default NgrxStateIcon;
