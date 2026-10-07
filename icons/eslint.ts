import type { Icon } from "../types";
import { SOLID } from "../system";

/** ESLint: a hexagon round a solid inner hexagon. From the files set. */
export const EslintIcon: Icon = {
  name: "EslintIcon",
  node: [
    ["polygon", { points: "3.5,12 7.75,4.5 16.25,4.5 20.5,12 16.25,19.5 7.75,19.5" }],
    ["polygon", { points: "8.5,12 10.25,9 13.75,9 15.5,12 13.75,15 10.25,15", ...SOLID }],
  ],
};

export default EslintIcon;
