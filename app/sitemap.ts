import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { CONTENT_REVIEWED, routes } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${CONTENT_REVIEWED}T00:00:00+07:00`);
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
