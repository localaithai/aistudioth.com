import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Script from "next/script";
import OmniToaster from "@/components/OmniToaster";
import PageTransition from "@/components/PageTransition";
import { site } from "@/lib/site";
import { metadataFor } from "@/lib/site-data";
import { siteGraph } from "@/lib/structured-data";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "AI Studio TH", template: `%s | ${site.displayName}` },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  ...metadataFor("/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }}
        />
      </head>
      <body className={`${baiJamjuree.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
        <Script src="https://localai-omni.vercel.app/cta.js" strategy="afterInteractive" />
        <Script src="https://localai-omni.vercel.app/analytics.js" strategy="afterInteractive" />
        <OmniToaster />
      </body>
    </html>
  );
}
