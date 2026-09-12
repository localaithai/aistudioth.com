export const site = {
  name: "AI Studio TH",
  displayName: "AI Studio Thailand",
  url: "https://aistudioth.com",
  locale: "th",
  tagline: "AI rig บนโต๊ะสำหรับรัน model ในเครื่อง",
  definition:
    "AI Studio TH คือผู้ประกอบ AI rig บนโต๊ะสำหรับรัน model ในเครื่อง ปรับสเปกตาม VRAM และ runtime สำหรับ developer ในไทย.",
  description:
    "AI Studio TH คือผู้ประกอบ AI rig บนโต๊ะสำหรับรัน model ในเครื่อง ปรับสเปกตาม VRAM และ runtime สำหรับ developer ในไทย.",
  themeColor: "#fbfbfd",
  social: { ogImage: "/opengraph-image" },
  legalDisclosure: null,
  primaryCta: {
    label: "Configure your studio",
    href: "/#contact",
  },
  mimirRole:
    "Mimir Suites Local installed on the rig, or a bare rig for people who run their own stack.",
} as const;

export const TITLE_SUFFIX = ` | ${site.displayName}`;
export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;
export const PRODUCT_ID = `${site.url}/#ai-rig`;

export const absoluteUrl = (path = "/") =>
  path.startsWith("http")
    ? path
    : `${site.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;

export const PRIVATE_PATHS = ["/api/", "/admin/", "/preview/"] as const;

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production";
}
