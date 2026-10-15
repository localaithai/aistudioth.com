import { absoluteUrl, site } from "@/lib/site";

export type OpenGraphImage = {
  readonly url: string;
  readonly type?: string;
  readonly width?: number;
  readonly height?: number;
  readonly alt?: string;
};

export type OpenGraph = {
  readonly type: "website" | "article";
  readonly siteName: string;
  readonly locale: string;
  readonly url: string;
  readonly title: string;
  readonly description: string;
  readonly images: readonly OpenGraphImage[];
  readonly publishedTime?: string;
  readonly modifiedTime?: string;
};

export type TwitterCard = {
  readonly card: "summary_large_image";
  readonly title: string;
  readonly description: string;
  readonly images: readonly string[];
};

const socialImage = {
  url: absoluteUrl(site.social.ogImage),
  width: 1200,
  height: 630,
  alt: `${site.displayName}: ${site.tagline}`,
} as const;

/**
 * The card URL the Next.js build gave its not-found page, cache-busting query
 * included, so the URL social caches already hold stays valid.
 */
export const NOT_FOUND_SOCIAL_IMAGE: OpenGraphImage = {
  ...socialImage,
  url: `${socialImage.url}?9de450311b72183a`,
  type: "image/png",
};

export function pageSocial({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): { openGraph: OpenGraph; twitter: TwitterCard } {
  return {
    openGraph: {
      type: "website",
      locale: "th_TH",
      siteName: site.displayName,
      url: absoluteUrl(path),
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
