# Project Setup Guide

Complete guide for setting up the Little Boys e-commerce platform.

## Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/little-boys.git
cd little-boys

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080`

## Prerequisites

### Required Software

- **Node.js**: 18.18.0 or higher
- **npm**: 9.0.0 or higher
- **Git**: Latest version

### Recommended Tools

- **VS Code**: With recommended extensions
- **Chrome/Firefox**: For development and testing
- **Postman**: For API testing (if applicable)

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/little-boys.git
cd little-boys
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- Tailwind CSS 3.4.17
- Shadcn/ui components
- And more...

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Little Boys
VITE_CONTACT_EMAIL=contact@example.com
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

### Development

```bash
# Start development server
npm run dev

# Start with specific port
npm run dev -- --port 3000
```

### Building

```bash
# Production build
npm run build

# Development build
npm run build:dev

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint -- --fix
```

## Project Structure

```
little-boys/
├── .github/              # GitHub configuration
│   ├── workflows/        # GitHub Actions
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── pull_request_template.md
├── docs/                 # Documentation
│   ├── FEATURES.md
│   ├── TECHNOLOGIES.md
│   ├── STRUCTURE.md
│   └── ...
├── public/               # Static assets
│   ├── images/
│   └── ...
├── src/                  # Source code
│   ├── components/       # React components
│   ├── pages/            # Page components
│   ├── context/          # Context providers
│   ├── data/             # Static data
│   ├── types/            # TypeScript types
│   ├── lib/              # Utilities
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── .editorconfig         # Editor configuration
├── .env.example          # Environment variables template
├── .gitattributes        # Git attributes
├── .gitignore            # Git ignore rules
├── .nvmrc                # Node version
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── LICENSE               # MIT License
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── README.md             # Main documentation
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel configuration
└── vite.config.ts        # Vite configuration
```

## IDE Setup

### VS Code

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Configuration Files

### TypeScript (tsconfig.json)

Already configured with:
- Strict mode enabled
- Path aliases (@/ for src/)
- React JSX support
- ES2020 target

### Tailwind (tailwind.config.js)

Configured with:
- Custom color palette
- Dark mode support
- Custom animations
- Typography plugin

### Vite (vite.config.ts)

Configured with:
- React SWC plugin
- Path aliases
- Port 8080
- Optimized dependencies

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 8080
npx kill-port 8080

# Or use different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P > TypeScript: Restart TS Server
```

### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Clear dist folder
rm -rf dist

# Rebuild
npm run build
```

## Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Write code following project conventions
- Add tests if applicable
- Update documentation

### 3. Test Changes

```bash
npm run lint
npm run test
npm run build
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add your feature description"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## Best Practices

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful component names
- Keep components small and focused

### Component Structure

```tsx
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Types
interface Props {
  title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
  // 4. Hooks
  const [state, setState] = useState("");

  // 5. Handlers
  const handleClick = () => {
    // ...
  };

  // 6. Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
```

### File Naming

- Components: PascalCase (e.g., `ProductCard.tsx`)
- Utilities: camelCase (e.g., `formatPrice.ts`)
- Types: PascalCase (e.g., `Product.ts`)
- Constants: UPPER_CASE (e.g., `API_URL.ts`)

## Resources

### Documentation

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Shadcn/ui](https://ui.shadcn.com/)

### Community

- [GitHub Issues](https://github.com/yourusername/little-boys/issues)
- [Discussions](https://github.com/yourusername/little-boys/discussions)

## Getting Help

1. Check [documentation](docs/)
2. Search [existing issues](https://github.com/yourusername/little-boys/issues)
3. Ask in [discussions](https://github.com/yourusername/little-boys/discussions)
4. Create a [new issue](https://github.com/yourusername/little-boys/issues/new)

## Next Steps

After setup:

1. Explore the codebase
2. Read [FEATURES.md](docs/FEATURES.md)
3. Check [CONTRIBUTING.md](docs/CONTRIBUTING.md)
4. Start building!

---

Happy coding! 🚀
