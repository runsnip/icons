import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

/* The catalogue site follows the package: it names the newest 0.x on the CDN, never a version of its own, so a
   release is what updates it (and not an edit to the page). */
test("site/index.html loads @runsnip/icons@0, never a pinned version", () => {
  const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  const refs = [...html.matchAll(/@runsnip\/icons@([^/"'\s<]+)/g)].map((m) => m[1]);
  assert.ok(refs.length >= 3, "the page loads the package from the CDN");
  assert.deepEqual([...new Set(refs)], ["0"], `pinned versions in the page: ${refs.join(", ")}`);
});
