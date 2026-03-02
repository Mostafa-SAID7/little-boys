# Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Code Quality

- [ ] All tests passing (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Code reviewed and approved
- [ ] All dependencies up to date
- [ ] No console.log statements in production code
- [ ] No commented-out code blocks

### Build & Performance

- [ ] Production build successful (`npm run build`)
- [ ] Build size optimized (check dist/ folder size)
- [ ] Images optimized and compressed
- [ ] Lazy loading implemented where needed
- [ ] Code splitting configured
- [ ] Bundle analyzed for optimization opportunities

### Configuration

- [ ] Environment variables configured
- [ ] API endpoints updated for production
- [ ] CORS settings configured
- [ ] Security headers configured
- [ ] SSL/TLS certificate ready
- [ ] Domain name configured
- [ ] CDN configured (if applicable)

### Security

- [ ] No sensitive data in code
- [ ] API keys stored securely
- [ ] Authentication implemented correctly
- [ ] Authorization checks in place
- [ ] Input validation on all forms
- [ ] XSS protection enabled
- [ ] CSRF protection enabled
- [ ] Security headers configured

### SEO & Analytics

- [ ] Meta tags configured
- [ ] Open Graph tags added
- [ ] Twitter Card tags added
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Analytics tracking code added
- [ ] Error tracking configured (Sentry, etc.)

### Testing

- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge
- [ ] Tested on mobile devices
- [ ] Tested on tablets
- [ ] Responsive design verified
- [ ] Dark mode tested
- [ ] Light mode tested
- [ ] All routes accessible
- [ ] Forms working correctly
- [ ] Cart functionality tested
- [ ] Wishlist functionality tested
- [ ] Search functionality tested
- [ ] Filters working correctly
- [ ] Pagination working correctly

### Documentation

- [ ] README.md updated
- [ ] CHANGELOG.md updated
- [ ] API documentation updated
- [ ] Deployment guide reviewed
- [ ] Environment variables documented
- [ ] Known issues documented

## Deployment

### Platform Setup

- [ ] Platform account created (Vercel/Netlify/etc.)
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Custom domain configured
- [ ] SSL certificate installed

### Deploy

- [ ] Deploy to staging environment
- [ ] Test staging deployment
- [ ] Deploy to production
- [ ] Verify production deployment
- [ ] Test production site

## Post-Deployment

### Verification

- [ ] Homepage loads correctly
- [ ] All routes accessible
- [ ] Images loading properly
- [ ] Fonts loading correctly
- [ ] Styles applied correctly
- [ ] JavaScript working
- [ ] Forms submitting
- [ ] API calls working
- [ ] Authentication working
- [ ] Search working
- [ ] Filters working
- [ ] Cart working
- [ ] Wishlist working

### Performance

- [ ] Lighthouse score checked (aim for 90+)
- [ ] Core Web Vitals measured
- [ ] Page load time acceptable (<3s)
- [ ] Time to Interactive acceptable
- [ ] First Contentful Paint acceptable
- [ ] Largest Contentful Paint acceptable

### Monitoring

- [ ] Error tracking configured
- [ ] Analytics tracking verified
- [ ] Uptime monitoring configured
- [ ] Performance monitoring configured
- [ ] Log aggregation configured

### Communication

- [ ] Team notified of deployment
- [ ] Stakeholders informed
- [ ] Users notified (if applicable)
- [ ] Documentation shared
- [ ] Support team briefed

## Rollback Plan

- [ ] Rollback procedure documented
- [ ] Previous version tagged in Git
- [ ] Database backup created (if applicable)
- [ ] Rollback tested in staging

## Emergency Contacts

- [ ] DevOps team contact info
- [ ] Platform support contact info
- [ ] On-call schedule defined

## Notes

Add any deployment-specific notes here:

---

**Deployment Date:** _______________

**Deployed By:** _______________

**Version:** _______________

**Platform:** _______________

**Environment:** _______________

---

## Sign-off

- [ ] Developer approved
- [ ] QA approved
- [ ] Product owner approved
- [ ] DevOps approved

---

Last updated: March 2026
