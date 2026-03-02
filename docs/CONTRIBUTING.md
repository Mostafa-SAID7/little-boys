# Contributing to Little Boys

Thank you for your interest in contributing to Little Boys! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - Why is this enhancement needed?
- **Proposed solution**
- **Alternative solutions** considered
- **Additional context**

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test your changes**
5. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/little-boys.git

# Navigate to directory
cd little-boys

# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run type-check

# Build for production
npm run build
```

## Coding Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type
- Use type inference when possible

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Implement error boundaries where needed

### Styling
- Use Tailwind CSS utility classes
- Follow existing design system
- Use semantic color variables
- Maintain consistent spacing (8px base)
- Use `rounded` for border radius

### File Organization
- Place components in appropriate folders
- Use PascalCase for component files
- Use camelCase for utility files
- Keep files focused and single-purpose

### Code Style
- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use trailing commas
- Follow ESLint rules

### Naming Conventions
- **Components**: PascalCase (`ProductCard.tsx`)
- **Functions**: camelCase (`handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Types/Interfaces**: PascalCase (`Product`, `CartItem`)

## Commit Messages

Follow conventional commits format:

```
type(scope): subject

body

footer
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(cart): add quantity selector to cart items

fix(products): resolve image gallery navigation bug

docs(readme): update installation instructions

style(button): improve hover state styling
```

## Testing

### Before Submitting
- Test in multiple browsers
- Test responsive design
- Test dark/light themes
- Check for console errors
- Verify accessibility
- Test with keyboard navigation

### Manual Testing Checklist
- [ ] Feature works as expected
- [ ] No console errors or warnings
- [ ] Responsive on mobile, tablet, desktop
- [ ] Works in dark and light themes
- [ ] Accessible with keyboard
- [ ] No broken links or images
- [ ] Forms validate properly
- [ ] Loading states work correctly

## Documentation

### Code Documentation
- Add JSDoc comments for complex functions
- Document component props
- Explain non-obvious logic
- Update README if needed

### Documentation Files
- Update relevant docs in `docs/` folder
- Keep CHANGELOG.md updated
- Update FEATURES.md for new features
- Update TECHNOLOGIES.md for new dependencies

## Review Process

### What We Look For
- Code quality and readability
- Adherence to coding standards
- Proper testing
- Documentation updates
- No breaking changes (or properly documented)
- Performance considerations

### Review Timeline
- Initial review within 3-5 business days
- Follow-up reviews within 1-2 business days
- Merge after approval and passing checks

## Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Security**: See [SECURITY.md](SECURITY.md)
- **General**: Contact maintainers

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to Little Boys! 🎉
