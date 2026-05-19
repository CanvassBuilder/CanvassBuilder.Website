# Canvass Builder Website

Angular SSR marketing website for Canvass Builder, built with Nx and prepared for Cloudflare Workers Assets deployment.

## Commands

- `npm run start` starts the local Angular dev server.
- `npm run build` builds the SSR/prerendered production output.
- `npm run lint` runs ESLint for the Angular app.
- `npm run serve:ssr` builds and serves the Node SSR output locally.
- `npm run preview` builds and runs Wrangler locally against the Cloudflare Worker/assets config.
- `npm run deploy` builds and deploys with Wrangler.

## Content And CTAs

Marketing content, pricing tiers, blog seed posts, industries, navigation, and CTA placeholders live in:

`apps/canvassbuilder-site/src/app/marketing-data.ts`

Replace the placeholder trial and Stripe URLs there when production signup and checkout links are ready.

## Cloudflare

The Angular build prerenders the marketing routes into `dist/apps/canvassbuilder-site/browser`. Wrangler serves those assets from Cloudflare Workers Assets using `wrangler.jsonc` and a small Worker entry at `apps/canvassbuilder-site/src/worker.ts`.

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step Cloudflare and GitHub Actions deployment instructions.
