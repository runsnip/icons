import type { Icon } from "../types";
import { LatexIcon } from "./latex";

/** A LaTeX package: LatexIcon's drawing, a kind of its own in its own colour. From the files set. */
export const LatexPackageIcon: Icon = {
  name: "LatexPackageIcon",
  node: LatexIcon.node,
};

export default LatexPackageIcon;
