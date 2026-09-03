import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = ["/", "/builds", "/models", "/benchmarks", "/about", "/ecosystem", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route === "/" ? "" : route}`, lastModified: new Date(), changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : 0.8 }));
}
