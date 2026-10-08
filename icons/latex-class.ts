import type { Icon } from "../types";
import { LatexIcon } from "./latex";

/** A LaTeX class: LatexIcon's drawing, a kind of its own in its own colour. From the files set. */
export const LatexClassIcon: Icon = {
  name: "LatexClassIcon",
  node: LatexIcon.node,
};

export default LatexClassIcon;
