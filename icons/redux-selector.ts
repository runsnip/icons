import type { Icon } from "../types";
import { ReduxIcon } from "./redux";

/** A Redux selector: ReduxIcon's drawing, a kind of its own in its own colour. From the files set. */
export const ReduxSelectorIcon: Icon = {
  name: "ReduxSelectorIcon",
  node: ReduxIcon.node,
};

export default ReduxSelectorIcon;
