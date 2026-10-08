import type { Icon } from "../types";
import { SOLID } from "../system";

/** Supabase: a bolt, its upper half the mark. From the files set. */
export const SupabaseIcon: Icon = {
  name: "SupabaseIcon",
  node: [
    ["path", { d: "M13 3.5 4.5 14h7.5l-1 6.5 8.5-10.5H12Z" }],
    ["path", { d: "M13 3.5 4.5 14H12Z", ...SOLID }],
  ],
};

export default SupabaseIcon;
