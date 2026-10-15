import type { APIRoute } from "astro";
import { isProductionDeployment, PRIVATE_PATHS, site } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "meta-externalagent",
];

type Rule = {
  userAgent: readonly string[];
  allow?: string;
  disallow: readonly string[];
};

const ruleText = (rule: Rule) =>
  rule.userAgent.map((agent) => `User-Agent: ${agent}\n`).join("") +
  (rule.allow ? `Allow: ${rule.allow}\n` : "") +
  rule.disallow.map((path) => `Disallow: ${path}\n`).join("") +
  "\n";

export const GET: APIRoute = () => {
  const rules: Rule[] = [
    { userAgent: ["*"], allow: "/", disallow: PRIVATE_PATHS },
    { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
  ];
  const body = isProductionDeployment()
    ? `${rules.map(ruleText).join("")}Host: ${site.url}\nSitemap: ${site.url}/sitemap.xml\n`
    : ruleText({ userAgent: ["*"], disallow: ["/"] });
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
