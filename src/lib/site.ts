import { cacheLife } from "next/cache";

/**
 * Current year, resolved on the server.
 *
 * `cacheComponents` is enabled in this project, so an unstable value like
 * `new Date()` cannot be read while prerendering. Caching the result keeps the
 * route fully static while still rolling over on its own once a day.
 */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
