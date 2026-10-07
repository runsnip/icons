import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Thickened brackets round lines of references: a bibliography. From the files set. */
export const BibliographyIcon: Icon = {
  name: "BibliographyIcon",
  node: [
    ["path", { d: "M9.5 9h5M9.5 12h5M9.5 15h3" }],
    ["path", { d: "M7 5H5v14h2M17 5h2v14h-2", ...SOLID_STROKE }],
  ],
};

export default BibliographyIcon;
