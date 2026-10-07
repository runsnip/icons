"use client";

import { useEffect, useState } from "react";
import { loadIcon } from "../dynamic";
import type { Icon as IconData } from "../types";
import type { IconProps } from "./create";
import { Icon } from "./icon";

/**
 * An icon by its file name (`bold`, `chevron-right`), loaded the first time it is shown — for names that come from
 * data. In a Server Component, `await loadIcon(name)` and render `<Icon icon={…} />` instead: nothing is loaded in
 * the browser then.
 */
export function DynamicIcon({ name, fallback = null, ...props }: IconProps & { name: string; fallback?: React.ReactNode }) {
  const [icon, setIcon] = useState<{ name: string; data: IconData | null } | null>(null);
  useEffect(() => {
    let live = true;
    void loadIcon(name).then((data) => { if (live) setIcon({ name, data }); });
    return () => { live = false; };
  }, [name]);
  if (!icon || icon.name !== name || !icon.data) return <>{fallback}</>;
  return <Icon icon={icon.data} {...props} />;
}
