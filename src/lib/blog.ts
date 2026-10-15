import path from "node:path";
import { type BlogSite, createBlog, type Post } from "@mimir/blog";
import { absoluteUrl, ORG_ID, SITE_ID, site, TITLE_SUFFIX } from "@/lib/site";
import { blogIndex, routes } from "@/lib/site-data";

export const blogSite: BlogSite = {
  url: site.url,
  name: site.displayName,
  locale: site.locale,
  titleSuffix: TITLE_SUFFIX,
  orgId: ORG_ID,
  siteId: SITE_ID,
};

const normalizePath = (value: string) =>
  value === "" || value === "/"
    ? "/"
    : "/" + value.replace(/^\/+|\/+$/g, "") + "/";

export const blog = createBlog({
  site: blogSite,
  contentDir: path.resolve(process.cwd(), "content/blog"),
  knownPaths: routes.map((route) => normalizePath(route.path)),
  moneyPaths: ["/models/", "/benchmarks/", "/builds/"],
  index: blogIndex,
});

export const orderedBlogPosts = [...blog.posts()].sort(
  (left, right) =>
    right.published.getTime() - left.published.getTime() ||
    (right.newsDate ?? "").localeCompare(left.newsDate ?? "") ||
    left.slug.localeCompare(right.slug),
);

export function blogPostImage(post: Post): string {
  return post.hero
    ? blogSite.url +
        "/blog-media/" +
        path.basename(new URL(post.hero.src).pathname)
    : absoluteUrl(site.social.ogImage);
}
