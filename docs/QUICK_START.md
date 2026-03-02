# Quick Start Guide

Get Little Boys up and running in 5 minutes!

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/little-boys.git
cd little-boys

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: `http://localhost:8080`

## 📦 What's Included

- ✅ React 18 + TypeScript
- ✅ Tailwind CSS + Shadcn/ui
- ✅ React Router for navigation
- ✅ Dark/Light theme support
- ✅ Responsive design
- ✅ E-commerce features (cart, wishlist, search)
- ✅ Blog with pagination
- ✅ User profile management

## 🎯 Key Commands

```bash
# Development
npm run dev              # Start dev server (port 8080)

# Building
npm run build            # Production build
npm run preview          # Preview production build

# Testing
npm run test             # Run tests
npm run lint             # Check code quality
```

## 📁 Project Structure

```
little-boys/
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Page components
│   ├── context/         # State management
│   └── data/            # Mock data
├── public/              # Static assets
└── docs/                # Documentation
```

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Docker
```bash
docker-compose up
```

## 📚 Learn More

- [Full Documentation](README.md)
- [Setup Guide](PROJECT_SETUP.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Features List](docs/FEATURES.md)
- [Contributing](docs/CONTRIBUTING.md)

## 🆘 Need Help?

- [Open an Issue](https://github.com/yourusername/little-boys/issues)
- [Read the Docs](docs/)
- [Check Examples](docs/USE_CASES.md)

## ⚡ Quick Tips

1. **Environment Variables**: Copy `.env.example` to `.env`
2. **Node Version**: Use Node 18+ (check with `node -v`)
3. **Port Conflict**: Change port with `npm run dev -- --port 3000`
4. **Clear Cache**: `rm -rf node_modules dist && npm install`

## 🎨 Customize

1. Update colors in `tailwind.config.ts`
2. Modify components in `src/components/`
3. Add pages in `src/pages/`
4. Update routes in `src/App.tsx`

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] App opens at `http://localhost:8080`
- [ ] No console errors

## 🎉 You're Ready!

Start building amazing features for Little Boys!

---

**Next Steps:**
1. Explore the codebase
2. Read [FEATURES.md](docs/FEATURES.md)
3. Check [CONTRIBUTING.md](docs/CONTRIBUTING.md)
4. Start coding!

Happy coding! 🚀
