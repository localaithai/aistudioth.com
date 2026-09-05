# aistudioth.com

Static Next.js 16 site for aistudioth.com, the hardware line's developer door: one desk-side AI rig spec'd to run models locally, sold as a build. `CLAUDE.md` is a symlink to this file.

## Quick reference

- Package manager: npm (`package-lock.json` is the committed lockfile)
- Develop: `npm run dev`
- Verification: `npm run lint && npm run build` (static export writes `out/`)
- No typecheck script and no test suite. `next build` is the type gate.

## Business context

Before writing copy, CTAs, footer disclosures, or cross-links, read:

- Brand rules every site obeys: `../../business/brand-architecture.md`
- This domain's brief (buyer, voice, CTA, content moat): `../../business/domains/aistudioth.com.md`
- Vendor marks: `../../business/domains/nvidia-dgx.md`. DGX Spark and RTX are products inside our builds, never our identity or a reseller claim.
- Lead capture fields and routing: `../../business/leads.md`

## Project rules

- The buyer is the person who will sit at the machine. Voice is spec-led and geeky: VRAM versus model tables, bench numbers, build guides. `aiworkstationthailand.com` is the procurement-facing sibling; never paste from it.
- `lib/site.ts` is the only place a brand value is written: name, URL, CTA, contact, CRM source, Mimir role, legal disclosure. `lib/rig-data.ts` owns build tiers, model fit and bench figures. Pages read from both; they never restate a value inline.
- Fully static export (`output: "export"` in `next.config.ts`). No API routes, middleware or request-time rendering.
- Primary CTA is "Configure your studio" into the contact form. "Visit Mimir Suites" is never the primary CTA; "Powered by Mimir Suites" is fine.
- `site.legalDisclosure` stays `null` until the operating entity is named. Render nothing, never a placeholder.
- Copy is Thai-first with English technical nouns inline (GPU, VRAM, quantisation, runtime). Bai Jamjuree carries both scripts; keep Thai line heights.
- Motion is framer-motion only. Animation serves the spec story, never decoration, and honours reduced motion.
- Use the `@/*` alias. TypeScript is strict; do not weaken types or add broad suppressions.
- Preserve WCAG 2.2 AA behavior: semantic structure, keyboard access, visible focus, contrast and touch targets.

## Source of truth

- Implementation status: `docs/central-plan/CENTRAL_PLAN_aistudio-rig-repositioning.html`
- Business strategy, brand architecture and domain briefs: `../../business/`

Update the plan in the same change when implementation changes what is currently true.
