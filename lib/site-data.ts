import type { Metadata } from "next";
import { TITLE_SUFFIX, absoluteUrl, site } from "@/lib/site";
import { assertSnippet } from "@/lib/snippet";
import { pageSocial } from "@/lib/social";

type StaticRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  sitelinkName?: string;
};

export const CONTENT_REVIEWED = "2026-09-23";

export const routes = [
  {
    path: "/",
    title: "AI rig สำหรับรัน model ในเครื่อง",
    description: site.description,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/builds",
    title: "Builds",
    description:
      "Compare desk AI rig builds for local models, from DGX Spark to RTX 5090 and Mac Studio.",
    priority: 0.8,
    changeFrequency: "monthly",
    sitelinkName: "Builds",
  },
  {
    path: "/models",
    title: "Models",
    description:
      "Compare VRAM and unified memory for running local models from 8B to 405B on a desk rig.",
    priority: 0.8,
    changeFrequency: "monthly",
    sitelinkName: "Models",
  },
  {
    path: "/benchmarks",
    title: "Benchmarks",
    description:
      "Read local AI rig benchmarks with model, runtime, and context stated clearly.",
    priority: 0.8,
    changeFrequency: "monthly",
    sitelinkName: "Benchmarks",
  },
  {
    path: "/about",
    title: "About",
    description:
      "Learn how AI Studio TH specs a local AI rig around your model, runtime, and budget.",
    priority: 0.7,
    changeFrequency: "monthly",
    sitelinkName: "About",
  },
  {
    path: "/ecosystem",
    title: "Ecosystem",
    description:
      "Choose local AI rigs or cloud models by data boundary, model use, and workflow.",
    priority: 0.7,
    changeFrequency: "monthly",
    sitelinkName: "Ecosystem",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Configure an AI Studio TH rig with model, memory, runtime, and hardware needs.",
    priority: 0.6,
    changeFrequency: "monthly",
    sitelinkName: "Contact",
  },
  {
    path: "/privacy",
    title: "นโยบายความเป็นส่วนตัว",
    description: "การเก็บ ใช้ และคุ้มครองข้อมูลบนเว็บไซต์ AI Studio TH ตาม PDPA.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const satisfies readonly StaticRoute[];

type RoutePath = (typeof routes)[number]["path"];

export function metadataFor(path: RoutePath): Metadata {
  const route = routes.find((entry) => entry.path === path);
  if (!route) throw new Error(`SEO: missing route ${path}`);
  assertSnippet(path, {
    title: route.title,
    description: route.description,
    titleSuffix: TITLE_SUFFIX,
  });
  const title = `${route.title}${TITLE_SUFFIX}`;
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: absoluteUrl(path) },
    ...pageSocial({ path, title, description: route.description }),
  };
}

for (const route of routes) metadataFor(route.path);
