import { serializeJsonLd } from "@mimir/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/blog-article";
import { blog, blogPostImage, blogSite, orderedBlogPosts } from "@/lib/blog";
import { absoluteUrl, site, TITLE_SUFFIX } from "@/lib/site";
import { assertSnippet } from "@/lib/snippet";

export const dynamicParams = false;
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blog.staticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.post(slug);
  if (!post) notFound();
  assertSnippet(post.path, {
    title: post.title,
    description: post.description,
    titleSuffix: TITLE_SUFFIX,
  });
  const title = post.title + TITLE_SUFFIX;
  const image = blogPostImage(post);
  return {
    title: { absolute: title },
    description: post.description,
    alternates: { canonical: absoluteUrl(post.path) },
    openGraph: {
      type: "article",
      title,
      description: post.description,
      url: absoluteUrl(post.path),
      siteName: blogSite.name,
      locale: blogSite.locale === "th" ? "th_TH" : "en_US",
      publishedTime: post.published.toISOString(),
      modifiedTime: post.reviewed.toISOString(),
      images: [
        {
          url: image,
          alt: post.hero?.alt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blog.post(slug);
  if (!post) notFound();
  const relatedPosts = orderedBlogPosts
    .filter(
      (candidate) =>
        candidate.slug !== post.slug && candidate.cluster === post.cluster,
    )
    .slice(0, 2);
  return (
    <main id="content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            blog.jsonLd(post, { imageUrl: blogPostImage(post) }),
          ),
        }}
      />
      <BlogArticle
        blog={blog}
        post={post}
        siteName={blogSite.name}
        ctaLabel={site.primaryCta.label}
        ctaHref={site.primaryCta.href}
        relatedPosts={relatedPosts}
      />
    </main>
  );
}
