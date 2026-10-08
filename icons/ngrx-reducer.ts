import type { Icon } from "../types";
import { NgrxIcon } from "./ngrx";

/** An NgRx reducer: NgrxIcon's drawing, a kind of its own in its own colour. From the files set. */
export const NgrxReducerIcon: Icon = {
  name: "NgrxReducerIcon",
  node: NgrxIcon.node,
};

export default NgrxReducerIcon;
