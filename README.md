# Shopify Reference Component Showcase

Single-page React (Vite) SPA displaying reusable UI sections extracted from
two Shopify storefronts, rebuilt with placeholder imagery and paraphrased copy.

- **Reference 1:** [beminimalist.co](https://beminimalist.co) — skincare, minimal
- **Reference 2:** [gymshark.com](https://www.gymshark.com) — athletic apparel, bold

See [`COMPONENT_INVENTORY.md`](./COMPONENT_INVENTORY.md) for the full component
list, props, and section order for each reference — it matches `src/App.jsx` exactly.

## Scope

- One SPA, one route (`/`)
- Placeholder imagery only (`placehold.co`), no real brand assets
- Paraphrased copy only, no proprietary Liquid/theme source
- No cart backend, no payments, no multi-page clone

## Local development

\`\`\`bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
\`\`\`

## Deploying to GitHub Pages

This repo ships with \`.github/workflows/deploy.yml\`, which builds and deploys
\`dist/\` to GitHub Pages automatically on every push to \`main\`.

One-time setup after pushing this repo to GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to \`main\` (or run the workflow manually from the **Actions** tab).
4. The live URL will appear in the workflow run summary and under
   **Settings → Pages** — typically \`https://<username>.github.io/shopify-showcase/\`.

\`vite.config.js\` is already set with \`base: '/shopify-showcase/'\` to match a
project-page URL. If you rename the repo, update \`base\` to match.
