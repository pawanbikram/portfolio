# Portfolio (Vite + React)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages + Custom Domain)

This repo includes `.github/workflows/pages.yml` which deploys `dist/` to GitHub Pages on every push to `main`.

1. Push to GitHub.
2. In GitHub: `Settings → Pages`
   - Source: `GitHub Actions`
   - Custom domain: `pawanshahi.com.np`
   - Enforce HTTPS (after DNS propagates)
3. DNS at your domain provider:
   - Apex `pawanshahi.com.np`:
     - `A` → `185.199.108.153`
     - `A` → `185.199.109.153`
     - `A` → `185.199.110.153`
     - `A` → `185.199.111.153`
   - Optional `www`:
     - `CNAME` → `pawanbikram.github.io`

The `public/CNAME` file is included so the custom domain stays configured across deployments.

