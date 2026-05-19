# Deploying Canvass Builder Website to Cloudflare

This project is an Nx Angular SSR/hybrid-rendering site. The production build prerenders the marketing routes into `dist/apps/canvassbuilder-site/browser`, and Cloudflare Workers Assets serves that output through `wrangler.jsonc`.

## 1. Confirm Local Prerequisites

From `D:\Repos\CanvassBuilder.Website`:

```powershell
npm ci
npm run test
npm run build
npx wrangler deploy --dry-run
```

Expected result:

- Lint passes.
- Angular builds successfully.
- The build reports prerendered static routes.
- Wrangler reads assets from `dist/apps/canvassbuilder-site/browser`.

## 2. Preview Locally

Use Cloudflare's local preview:

```powershell
npm run preview
```

Use the Node SSR preview if you specifically want to inspect the Angular server output:

```powershell
npm run serve:ssr
```

The `serve:ssr` command uses the generated Node/Express server and defaults to port `4000` unless you set `PORT`.

## 3. Cloudflare One-Time Setup

In Cloudflare:

1. Open your Cloudflare account dashboard.
2. Create or confirm a Workers application named `canvassbuilder-website`.
3. Confirm your account has Workers enabled.
4. If using a production domain, attach a custom domain or route for `canvassbuilder.com`.
5. Create a Cloudflare API token for GitHub Actions with permission to deploy Workers.
6. Copy your Cloudflare Account ID.

The repo config currently keeps domain routing in the Cloudflare dashboard instead of hard-coding it in `wrangler.jsonc`. If you prefer routes in code, add either a `route` or `routes` entry to `wrangler.jsonc` after confirming the zone name or zone ID.

## 4. GitHub Secrets

In GitHub, open:

`CanvassBuilder/CanvassBuilder.Website` -> Settings -> Secrets and variables -> Actions

Add these repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Do not commit these values.

## 5. GitHub Actions Deployment

This repo includes `.github/workflows/deploy-cloudflare.yml`.

On every push to `main`, the workflow will:

1. Check out the repository.
2. Install Node.js 24.
3. Run `npm ci`.
4. Run `npm run test`.
5. Run `npm run build`.
6. Deploy with the repo-installed Wrangler CLI using the Cloudflare secrets.

You can also trigger it manually from the GitHub Actions tab with **Run workflow**.

## 6. Manual Deployment

If you want to deploy from your machine instead of GitHub Actions:

```powershell
npm ci
npm run test
npm run build
npx wrangler login
npm run deploy
```

`npm run deploy` runs:

```powershell
npm run build && wrangler deploy
```

## 7. Important Files

- `package.json`: build, preview, SSR preview, and deploy scripts.
- `wrangler.jsonc`: Cloudflare Worker/Workers Assets configuration.
- `apps/canvassbuilder-site/src/worker.ts`: Worker entry point that forwards requests to the `ASSETS` binding.
- `apps/canvassbuilder-site/src/app/app.routes.server.ts`: Angular hybrid rendering/prerender route configuration.
- `apps/canvassbuilder-site/public/robots.txt`: robots policy.
- `apps/canvassbuilder-site/public/sitemap.xml`: static sitemap.

## 8. Troubleshooting

- If GitHub Actions says no Cloudflare account is configured, confirm `CLOUDFLARE_ACCOUNT_ID` is set.
- If Wrangler cannot authenticate, recreate the API token and confirm it has Workers deploy permissions.
- If GitHub reports Node.js 20 action deprecation warnings, confirm the workflow is using `actions/checkout@v5`, `actions/setup-node@v5`, and the direct `npx wrangler deploy` command.
- If the deployed site shows old content, confirm `npm run build` completed before `wrangler deploy`.
- If a custom domain does not route to the Worker, confirm the custom domain or route in the Cloudflare dashboard.
- If local SSR rejects `127.0.0.1`, preview with `localhost` instead.
