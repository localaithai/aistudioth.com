import type { APIRoute } from "astro";
import { blog } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";
import { routes } from "@/lib/site-data";

export const GET: APIRoute = () => {
  const pages = routes.map(
    (route) =>
      `- [${route.title}](${absoluteUrl(route.path)}): ${route.description}`,
  );
  const body =
    [
      `# ${site.displayName}`,
      "",
      `> ${site.definition}`,
      "",
      "## Facts",
      `- What this is: ${site.definition}`,
      "- Offer: A desk-side local AI rig can be configured around the model, VRAM and runtime the buyer needs.",
      `- Software: ${site.mimirRole}`,
      "- Audience: Developers, researchers and small technical teams in Thailand who use the machine themselves.",
      "",
      "## Pages",
      ...pages,
      "",
    ].join("\n") +
    "\n" +
    blog.llmsSection();
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
