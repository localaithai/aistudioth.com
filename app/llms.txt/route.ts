import { absoluteUrl, site } from "@/lib/site";
import { routes } from "@/lib/site-data";

export const dynamic = "force-static";

export function GET() {
  const pages = routes.map((route) => `- [${route.title}](${absoluteUrl(route.path)}): ${route.description}`);
  const body = [
    `# ${site.displayName}`,
    "",
    `> ${site.definition}`,
    "",
    "## Facts",
    `- What this is: ${site.definition}`,
    "- Offer: A desk-side local AI rig can be configured around the model, VRAM and runtime the buyer needs.",
    "- Software: Mimir Suites Local can be installed on the rig, or the rig can ship as bare hardware for an existing stack.",
    "- Audience: Developers, researchers and small technical teams in Thailand who use the machine themselves.",
    "",
    "## Pages",
    ...pages,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
