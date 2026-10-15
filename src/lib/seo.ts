import type { OpenGraph, TwitterCard } from "@/lib/social";

/** Everything the base layout renders into <head> for one page. */
export type PageHead = {
  readonly title: string;
  readonly description: string;
  /** Absolute canonical URL. */
  readonly canonical: string;
  readonly openGraph: OpenGraph;
  readonly twitter: TwitterCard;
  readonly noindex?: boolean;
  /** Printed as a first <title> ahead of `title`, as Next.js did on its not-found page. */
  readonly statusTitle?: string;
};
