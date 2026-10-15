import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { site } from "./src/lib/site";

// Fully static output: every endpoint under src/pages/ is prerendered at build
// time. "preserve" keeps the file layout the Next.js export published
// (about.html, blog/index.html, blog/<slug>/index.html), so every URL the site
// already served stays valid on any static host.
export default defineConfig({
  site: site.url,
  output: "static",
  build: { format: "preserve" },
  devToolbar: { enabled: false },
  integrations: [react()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bai Jamjuree",
      cssVariable: "--font-bai",
      weights: [300, 400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "thai"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
