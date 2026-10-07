import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Prisma: its leaning prism, the front edge the mark. From the files set. */
export const PrismaIcon: Icon = {
  name: "PrismaIcon",
  node: [
    ["path", { d: "M13 3.5 20 18 8.5 20.5 4 15.5Z" }],
    ["path", { d: "M13 3.5 8.5 20.5", ...SOLID_STROKE }],
  ],
};

export default PrismaIcon;
