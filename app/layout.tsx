import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import Script from "next/script";
import OmniToaster from "@/components/OmniToaster";
import PageTransition from "@/components/PageTransition";
import { site } from "@/lib/site";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "AI Studio TH, AI rig บนโต๊ะสำหรับรัน model ในเครื่อง";
const description =
  "AI rig บนโต๊ะที่ปรับตาม model, VRAM, runtime และงานจริง สำหรับ developer, researcher และทีมเทคนิคขนาดเล็กในไทย.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.displayName}` },
  description,
  keywords: [
    "AI PC build Thailand",
    "local LLM Thailand",
    "VRAM for 70B",
    "AI Studio TH",
    "AI rig บนโต๊ะ",
    "RTX 5090 workstation",
    "DGX Spark",
    "Mac Studio Ultra",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: site.url,
    siteName: site.displayName,
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.displayName,
      url: site.url,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.displayName,
      url: site.url,
      inLanguage: "th",
    },
    {
      "@type": "Product",
      name: "AI rig บนโต๊ะ",
      description:
        "เครื่อง AI ที่ปรับสเปกเพื่อรัน model ในเครื่อง เลือกติดตั้ง Mimir Suites Local หรือรับเฉพาะ hardware ได้.",
      brand: { "@type": "Brand", name: site.displayName },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
