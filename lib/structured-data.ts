import { ORG_ID, PRODUCT_ID, SITE_ID, absoluteUrl, site } from "@/lib/site";

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": ORG_ID, name: site.displayName, url: site.url, slogan: site.tagline, description: site.description },
      { "@type": "WebSite", "@id": SITE_ID, url: site.url, name: site.displayName, inLanguage: site.locale, publisher: { "@id": ORG_ID } },
      { "@type": "Product", "@id": PRODUCT_ID, url: absoluteUrl("/builds"), name: "AI Studio TH local AI rig", description: "AI rig บนโต๊ะที่ปรับสเปกตาม model, VRAM และ runtime สำหรับรัน model ในเครื่อง.", brand: { "@type": "Brand", name: site.displayName } },
    ],
  };
}
