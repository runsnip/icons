import type { Icon } from "../types";
import { SOLID } from "../system";

/** A certificate, its seal the mark. From the files set. */
export const CertificateIcon: Icon = {
  name: "CertificateIcon",
  node: [
    ["path", { d: "M12 15.5H5.5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v5" }],
    ["path", { d: "M7 7.5h9M7 11h5M14 17.5l-.5 3M18 17.5l.5 3" }],
    ["circle", { cx: 16, cy: 15, r: 3, ...SOLID }],
  ],
};

export default CertificateIcon;
