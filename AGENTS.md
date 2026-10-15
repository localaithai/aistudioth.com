# aistudioth.com

Static Astro 7 site for aistudioth.com, the hardware line's developer door: one desk-side AI rig spec'd to run models locally, sold as a build. React ships only as client islands. `CLAUDE.md` is a symlink to this file.

## Quick reference

- Package manager: `pnpm@10.17.1` (`pnpm-lock.yaml` is the committed lockfile)
- Develop: `pnpm dev` at `http://localhost:15005`; `pnpm preview` serves the built `dist/` on the same port
- Verification: `pnpm lint && pnpm typecheck && pnpm build` (static build writes `dist/`)
- Before changing routes, navigation, headings, metadata, copy, internal links, structured data, robots, sitemap, or `llms.txt`, read [SEO, AEO, and sitelink maintenance](docs/reference/seo-aeo-maintenance.md).
- No automated test suite. Lint, `astro check` and the static build are the gates.

## Business context

Before writing copy, CTAs, footer disclosures, or cross-links, read:

- Brand rules every site obeys: `../../business/brand-architecture.md`
- This domain's brief (buyer, voice, CTA, content moat): `../../business/domains/aistudioth.com.md`
- Vendor marks: `../../business/domains/nvidia-dgx.md`. DGX Spark and RTX are products inside our builds, never our identity or a reseller claim.
- Lead capture fields and routing: `../../business/leads.md`

## Project rules

- The buyer is the person who will sit at the machine. Voice is spec-led and geeky: VRAM versus model tables, bench numbers, build guides. `aiworkstationthailand.com` is the procurement-facing sibling; never paste from it.
- `src/lib/site.ts` is the only place a brand value is written: name, URL, CTA, Mimir role, legal disclosure. `src/lib/rig-data.ts` owns build tiers, model fit and bench figures. Pages read from both; they never restate a value inline.
- Contact channels (email, LINE, phone) and the lead form come from omni's `cta.js` via `data-cta` attributes; never hardcode them in components.
- Fully static build (`output: "static"`, `build.format: "preserve"` in `astro.config.ts`). Pages keep slashless URLs and files (`/builds` is `builds.html`); the blog keeps `/blog/` and `/blog/<slug>/` as `index.html` files, the layout the Next.js export published. No adapter, API routes, middleware or request-time rendering. Non-page routes are prerendered endpoints under `src/pages/`: `robots.txt.ts`, `sitemap.xml.ts`, `llms.txt.ts`, `manifest.webmanifest.ts`, `blog/feed.xml.ts` and the extensionless `opengraph-image.ts` (satori and resvg at build time). No host configuration is committed.
- `metadataFor()` in `src/lib/site-data.ts` builds each page head and `src/layouts/Base.astro` renders it. Page `<title>`s are the bare route titles, the social titles carry the suffix, and the favicon and not-found og:image keep the cache-busting query strings the Next.js build published.
- Pages, layouts and static sections (`Hero`, `Partners`, `Contact`, `Footer`, `SitelinkTrail`) are `.astro` and ship no JS. React stays only for islands: `PageTransition` and `Navbar` (`client:load`), the toaster (`client:idle`), and the framer-motion sections (`client:visible`, or `client:load` when the section opens the page), plus server-only rendering of the blog MDX through `RenderNode`. Astro drops a `class` prop on React components, so pass `className`. A `client:visible` island must server-render an element, or it never hydrates.
- Primary CTA is "Configure your studio" into the contact form. "Visit Mimir Suites" is never the primary CTA; "Powered by Mimir Suites" is fine.
- `site.legalDisclosure` stays `null` until the operating entity is named. Render nothing, never a placeholder.
- Copy is Thai-first with English technical nouns inline (GPU, VRAM, quantisation, runtime). Bai Jamjuree carries both scripts; keep Thai line heights.
- Motion uses framer-motion for section entrances and React Bits `ScrambledText` with GSAP for Latin-only build memory capacities. The user's React Bits request supersedes the former framer-motion-only rule. Keep real text in server HTML, Thai outside the scramble boundary, the hero visible, and reduced motion static; see `docs/decisions/design/log-2026-10-15.md`.
- Use the `@/*` alias. TypeScript is strict; do not weaken types or add broad suppressions.
- Preserve WCAG 2.2 AA behavior: semantic structure, keyboard access, visible focus, contrast and touch targets.

## Shared image assets

- Browser-loaded content images use immutable URLs from `https://assets.mimir.business/assets/` through `src/lib/assets.ts` in both development and production. Do not add local URL fallbacks.
- Keep favicons, manifest icons, social cards, and structured-data identity images on this site origin because crawlers may omit the `Referer` header required by the asset-host WAF rule.
- Add or replace shared images through the `assets.mimir.business` catalogue workflow, then update the generated hash URL in the asset module.
- The asset host catalogue, deployment rules, and decisions live in the `assets.mimir.business` repository.

## Source of truth

- Active multi-session plan: `docs/central-plan/CENTRAL_PLAN_aistudio-rig-repositioning.html`
- Business strategy, brand architecture and domain briefs: `../../business/`

Update the plan in the same change when implementation changes what is currently true.

## Documentation lifecycle

- Production code, executable configuration, and meaningful tests define implemented behavior. Agreed product and business requirements define the behavior changes must satisfy; investigate any mismatch.
- Multi-session work belongs in `docs/central-plan/CENTRAL_PLAN_<feature>.html`. Preserve the settled design, ordered file and symbol changes, edge cases, tests, commands, progress, and exact resume point, then archive the plan after delivery.
- `docs/decisions/<domain>/log-YYYY-MM-DD.md` preserves selective durable rationale. Routine changes need no decision record.
- Former domain summary pages under `docs/decisions/` are historical snapshots and navigation aids. Assess their content when that domain is next changed; keep dated logs and links intact.
- Update maintained documentation only when a change affects one of its claims. Do not create empty documentation folders.
