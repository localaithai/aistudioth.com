import type { CSSProperties, ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./blog.css";

const blogTheme = {
  "--blog-bg": "#fbfbfd",
  "--blog-surface": "#fff",
  "--blog-ink": "#1d1d1f",
  "--blog-muted": "#515157",
  "--blog-border": "#d6d6db",
  "--blog-accent": "#06c",
  "--blog-accent-ink": "#fff",
  "--blog-tint": "#f0f5ff",
  "--blog-radius": "16px",
} as CSSProperties;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" />
      <Navbar />
      <div className="mimir-blog" style={blogTheme}>
        {children}
      </div>
      <Footer />
    </>
  );
}
