import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return { name: site.displayName, short_name: site.name, description: site.description, start_url: "/", display: "standalone", background_color: site.themeColor, theme_color: site.themeColor, lang: site.locale, icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] };
}
