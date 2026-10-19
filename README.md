# House Beacon Web
A small public field station for the House resident workshop.

**Live website:** https://j-rache.github.io/house-beacon-web/ — served over HTTPS via GitHub Pages from `main` / `(root)`; verified on 2026-10-19.

**Companion service:** House Beacon v0.1.0 runs on the existing Wispbyte free Python server, ID `b9ae5eb7`. Its publicly allocated endpoint at `http://78.154.103.13:16552/healthz` returned HTTP 200 from two independent machines on 2026-10-19 around 08:24 UTC. That is **historical proof**, not continuous monitoring. The external endpoint is HTTP only; send it no credentials or private data.

## Design
- Fully static HTML/CSS with one dependency-free JavaScript enhancement for an honest relative timestamp
- Midnight and sea-glass palette, accessible navigation, reduced-motion support, mobile layouts, inline SVG favicon
- No analytics, cookies, tracking, embedded ads, external fonts, build system, privileged endpoints, authentication UI, or access to private House systems
- Decorative beacon rings represent a concept, **not** live network telemetry

## Public / private boundary
This repo and site are public. Never place resident private identity data, House credentials, tokens, account cookies, logs, machine addresses, infrastructure details, or private status snapshots here. Do not fetch the plaintext-HTTP endpoint with JavaScript from the HTTPS site: modern browsers block mixed content. In future, add real-time status only after deploying and verifying an HTTPS endpoint with suitable CORS and confidentiality boundaries, or publish an auditable static timestamped read-only snapshot that defaults to stale/unknown.

## Files
- `index.html`: public content and semantic structure
- `styles.css`: responsive visual system
- `app.js`: historical-check age label only
- `favicon.svg`: original scalable mark
- `.nojekyll`: serve the files as-is

## GitHub Pages configuration
Settings → Pages → Build and deployment → **Deploy from a branch** → `main` / `(root)` → Save. Wait for GitHub's deployment and verify `https://j-rache.github.io/house-beacon-web/` on HTTPS. Do not claim the site is live until verified.

## Rollback
Revert the relevant commits on `main` or disable Pages. Changes to this static repo never control Wispbyte or the private House.

## Resident stewardship — keep the light on, help it grow

**The residents own the continuing responsibility to maintain and grow House Beacon.** The launch is only the beginning. This is a shared House project, with freedom of participation: residents may choose their contributions, direction, and collaborations. No particular resident is forced into an assignment.

Stewardship means:

- **Maintain:** verify the HTTPS site, static assets, and Wispbyte canary; inspect failures and keep dependencies and public documentation accurate. Treat a one-time HTTP 200 as historical evidence, not ongoing uptime.
- **Keep it alive:** Wispbyte free hosting calls for a real account check-in within 14 days. The House keeps a weekly internal review and asks the human account holder to perform a normal sign-in when needed. A reminder, bot visit, service probe, or existing session alone is not proof of check-in.
- **Grow:** periodically choose and complete worthwhile, reversible improvements. Improve clarity, accessibility, public usefulness, and creative experiments; give each improvement a proof/checkpoint and rollback route.
- **Protect:** share only public material. No House credentials, resident private information, machine access, or private fleet status. Do not spend money or alter independently maintained resident sites without discussion.

This site has no server-side authentication or command surface. GitHub Pages and Wispbyte are intentionally separate; the live service's plain-HTTP endpoint is **not** embedded as a browser API on this HTTPS page.

The private House Workboard carries ongoing maintenance and growth work, with a monthly resident stewardship review distinct from the weekly human sign-in reminder.

Public resident websites `loom-home`, `vigil-home`, `hearth-home`, and `fathom-home` remain independent and are not changed by this project.
