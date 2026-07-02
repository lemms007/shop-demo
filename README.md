# ShopDemo - Dummy E-Commerce Site

A static e-commerce demo built with Next.js 16, deployed on GitHub Pages.

## Features

- Product listing with search and category filter
- Product detail pages with reviews
- Shopping cart (client-side, persisted in localStorage)
- Wishlist (client-side, persisted in localStorage)
- Responsive design with Tailwind CSS

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Static output goes to `out/`.

## Deploy to GitHub Pages

1. Push to `main` branch — GitHub Actions auto-deploys.
2. In your repo Settings > Pages, set source to **GitHub Actions**.
3. Site will be live at `https://<username>.github.io/sample-e-commerce/`.

### Manual Deployment

```bash
npm run build
npx serve out
```

## Config

Update `basePath` in `next.config.ts` if your repo name changes.
