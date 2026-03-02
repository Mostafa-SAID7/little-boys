# Little Boys - E-commerce Platform for Children's Products

A modern, feature-rich e-commerce platform built with React, TypeScript, and Tailwind CSS, specializing in toys, clothing, books, and outdoor products for children.

![Little Boys](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/little-boys)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/little-boys)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Demo

[Live Demo](https://little-boys.vercel.app) | [Documentation](docs/) | [Report Bug](https://github.com/yourusername/little-boys/issues) | [Request Feature](https://github.com/yourusername/little-boys/issues)

## ✨ Features

Comprehensive list of features available in [docs/FEATURES.md](docs/FEATURES.md)

**Highlights:**
- 🛍️ Full e-commerce functionality with cart and wishlist
- 🔍 Advanced search, filter, and sort capabilities
- 📱 Fully responsive design
- 🌓 Dark/Light theme support
- 📝 Blog with pagination and filtering
- 👤 User profile management
- ⭐ Product reviews and ratings
- 🎨 Modern UI with smooth animations

## 🚀 Technologies

Built with modern web technologies. See [docs/TECHNOLOGIES.md](docs/TECHNOLOGIES.md) for details.

**Core Stack:**
- React 18.3.1
- TypeScript 5.6.2
- Vite 5.4.19
- Tailwind CSS 3.4.17
- Shadcn/ui Components
- React Router 7.1.1
- Tanstack Query 5.62.11

## 🏁 Getting Started

### Quick Start

See [QUICK_START.md](QUICK_START.md) for a 5-minute setup guide.

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd little-boys

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:8080`

For detailed setup instructions, see [PROJECT_SETUP.md](PROJECT_SETUP.md)

### Deployment

#### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/little-boys)

**Manual Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

**Environment Variables:**

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Configure the following variables:
- `VITE_API_URL` - API endpoint URL
- `VITE_APP_NAME` - Application name
- `VITE_CONTACT_EMAIL` - Contact email address

#### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy using gh-pages
npx gh-pages -d dist
```

## 📁 Project Structure

Detailed structure documentation in [docs/STRUCTURE.md](docs/STRUCTURE.md)

```
little-boys/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── context/        # React context providers
│   ├── data/           # Static data and mock data
│   ├── types/          # TypeScript type definitions
│   └── lib/            # Utility functions
├── public/             # Static assets
└── docs/               # Documentation files
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- [FEATURES.md](docs/FEATURES.md) - Complete feature list
- [TECHNOLOGIES.md](docs/TECHNOLOGIES.md) - Technology stack details
- [STRUCTURE.md](docs/STRUCTURE.md) - Project structure guide
- [STYLES.md](docs/STYLES.md) - Styling guidelines and theme
- [USE_CASES.md](docs/USE_CASES.md) - Common use cases and examples
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide for various platforms
- [PROJECT_SETUP.md](PROJECT_SETUP.md) - Complete setup guide
- [CHANGELOG.md](docs/CHANGELOG.md) - Version history
- [CONTRIBUTING.md](docs/CONTRIBUTING.md) - Contribution guidelines
- [CONTRIBUTORS.md](CONTRIBUTORS.md) - Project contributors
- [CODE_OF_CONDUCT.md](docs/CODE_OF_CONDUCT.md) - Community guidelines
- [SECURITY.md](docs/SECURITY.md) - Security policies

## 🎨 Styling

The project uses a custom design system with:
- Tailwind CSS for utility-first styling
- Shadcn/ui for component library
- Custom color palette with theme support
- Consistent spacing and typography
- Smooth animations and transitions

See [docs/STYLES.md](docs/STYLES.md) for detailed styling guidelines.

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) and [Code of Conduct](docs/CODE_OF_CONDUCT.md) before submitting pull requests.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔒 Security

Security is a priority. Please review our [Security Policy](docs/SECURITY.md) and report vulnerabilities responsibly.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **M.Said** - [Portfolio](https://m-said-portfolio.netlify.app/)

## 🙏 Acknowledgments

- Shadcn/ui for the component library
- Lucide React for icons
- Tailwind CSS team for the utility framework
- React community for excellent tools and libraries

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by M.Said
