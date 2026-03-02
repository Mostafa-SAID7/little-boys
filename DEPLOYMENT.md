# Deployment Guide

This guide covers deploying Little Boys to various platforms.

## Table of Contents

- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [GitHub Pages](#github-pages)
- [Docker Deployment](#docker-deployment)
- [Environment Variables](#environment-variables)

## Vercel Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/little-boys)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to preview:
```bash
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

### Configuration

The `vercel.json` file is already configured with:
- SPA routing (all routes redirect to index.html)
- Security headers
- Cache optimization
- Build settings

## Netlify Deployment

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/little-boys)

### Manual Deployment

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Configuration

The `netlify.toml` file is configured with:
- Build command and publish directory
- SPA redirects
- Security headers
- Cache headers for assets

## GitHub Pages

### Using GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages on push to main branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy using gh-pages:
```bash
npx gh-pages -d dist
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Select `gh-pages` branch
   - Save

## Docker Deployment

### Build Docker Image

```bash
docker build -t little-boys .
```

### Run Container

```bash
docker run -p 8080:80 little-boys
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
```

## Environment Variables

### Required Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

### Variables

- `VITE_API_URL` - API endpoint URL (default: http://localhost:3000)
- `VITE_APP_NAME` - Application name (default: Little Boys)
- `VITE_CONTACT_EMAIL` - Contact email address

### Platform-Specific Setup

#### Vercel
```bash
vercel env add VITE_API_URL
vercel env add VITE_APP_NAME
vercel env add VITE_CONTACT_EMAIL
```

#### Netlify
Add environment variables in:
- Netlify Dashboard > Site Settings > Environment Variables

#### GitHub Pages
Add secrets in:
- Repository Settings > Secrets and Variables > Actions

## Build Optimization

### Production Build

```bash
npm run build
```

### Build with Development Mode

```bash
npm run build:dev
```

### Preview Production Build

```bash
npm run preview
```

## Post-Deployment Checklist

- [ ] Verify all routes work correctly
- [ ] Test responsive design on mobile devices
- [ ] Check theme switching (light/dark mode)
- [ ] Verify all images load properly
- [ ] Test form submissions
- [ ] Check cart and wishlist functionality
- [ ] Verify search functionality
- [ ] Test blog pagination and filtering
- [ ] Check console for errors
- [ ] Test performance with Lighthouse

## Troubleshooting

### Routes Not Working

If routes return 404 errors, ensure your platform is configured for SPA routing:
- Vercel: Check `vercel.json` rewrites
- Netlify: Check `netlify.toml` redirects
- GitHub Pages: May need hash routing

### Environment Variables Not Loading

- Ensure variables are prefixed with `VITE_`
- Rebuild after adding new variables
- Check platform-specific environment variable settings

### Build Failures

- Clear cache: `rm -rf node_modules dist && npm install`
- Check Node.js version (requires 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run lint`

## Performance Optimization

### Recommendations

1. Enable compression (gzip/brotli)
2. Configure CDN for static assets
3. Enable HTTP/2
4. Set appropriate cache headers
5. Optimize images (use WebP format)
6. Enable lazy loading for images
7. Minimize bundle size

### Monitoring

- Use Vercel Analytics or Netlify Analytics
- Set up error tracking (Sentry, LogRocket)
- Monitor Core Web Vitals
- Track user behavior with analytics

## Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Open an issue on GitHub
4. Contact maintainers

---

Last updated: March 2026
