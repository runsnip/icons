import type { Icon } from "../types";
import { SOLID } from "../system";

/** Sequelize: a hexagon holding a cube, its top face filled. From the files set. */
export const SequelizeIcon: Icon = {
  name: "SequelizeIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 4.25v8.5L12 20.5l-7.5-4.25v-8.5ZM8.5 10.5v4l3.5 2 3.5-2v-4M12 12.5v4" }],
    ["path", { d: "M12 8.5l3.5 2-3.5 2-3.5-2Z", ...SOLID }],
  ],
};

export default SequelizeIcon;
