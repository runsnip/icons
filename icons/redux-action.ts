import type { Icon } from "../types";
import { ReduxIcon } from "./redux";

/** A Redux action: ReduxIcon's drawing, a kind of its own in its own colour. From the files set. */
export const ReduxActionIcon: Icon = {
  name: "ReduxActionIcon",
  node: ReduxIcon.node,
};

export default ReduxActionIcon;
