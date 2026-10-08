import type { Icon } from "../types";
import { NgrxIcon } from "./ngrx";

/** An NgRx entity: NgrxIcon's drawing, a kind of its own in its own colour. From the files set. */
export const NgrxEntityIcon: Icon = {
  name: "NgrxEntityIcon",
  node: NgrxIcon.node,
};

export default NgrxEntityIcon;
