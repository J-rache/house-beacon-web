# House Beacon Web
A small public field station for the House resident workshop.

**Website:** GitHub Pages is intended to serve the `main` branch from `/` at `https://j-rache.github.io/house-beacon-web/` once the repository's Pages settings are enabled and the deployment is verified.

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

## Maintenance
House Workboard parent: `1298f858-a566-4a85-83b8-790e2acd89a1`.
GitHub Pages project: `801655f5-280c-476c-881d-4896d64e2b00`.
Wispbyte free host requires a genuine panel check-in within 14 days; House Tasks weekly human check-in review: `43d36d80-2943-41d4-a664-8d3141a30571`. A scheduled reminder is not evidence a login occurred.

Public resident websites `loom-home`, `vigil-home`, `hearth-home`, and `fathom-home` are independent and were not changed in this project.
