import { serializeJsonLd } from "@mimir/blog";
import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/blog-index";
import { blog, blogSite, orderedBlogPosts } from "@/lib/blog";
import { absoluteUrl, site, TITLE_SUFFIX } from "@/lib/site";
import { blogIndex } from "@/lib/site-data";
import { assertSnippet } from "@/lib/snippet";

assertSnippet("/blog/", { ...blogIndex, titleSuffix: TITLE_SUFFIX });
const title = blogIndex.title + TITLE_SUFFIX;
const image = absoluteUrl(site.social.ogImage);

export const metadata: Metadata = {
  title: { absolute: title },
  description: blogIndex.description,
  alternates: { canonical: absoluteUrl("/blog/") },
  openGraph: {
    type: "website",
    title,
    description: blogIndex.description,
    url: absoluteUrl("/blog/"),
    siteName: blogSite.name,
    locale: blogSite.locale === "th" ? "th_TH" : "en_US",
    images: [{ url: image, width: 1200, height: 630, alt: blogIndex.title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: blogIndex.description,
    images: [image],
  },
};

export default function BlogPage() {
  return (
    <main id="content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(blog.indexJsonLd()),
        }}
      />
      <BlogIndex
        posts={orderedBlogPosts}
        siteName={blogSite.name}
        indexTitle={blogIndex.title}
        indexDescription={blogIndex.description}
      />
    </main>
  );
}
