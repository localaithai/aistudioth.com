import type { APIRoute } from "astro";
import { site } from "@/lib/site";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.displayName,
      short_name: site.name,
      description: site.description,
      start_url: "/",
      display: "standalone",
      background_color: site.themeColor,
      theme_color: site.themeColor,
      lang: site.locale,
      icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
