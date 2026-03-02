# Project Structure

Detailed overview of the Little Boys project structure and organization.

## Directory Structure

```
little-boys/
├── public/                 # Static assets
│   ├── cat1-4.png         # Category images
│   ├── c1-3.png           # Customer testimonial images
│   ├── m1-4.png           # Hero floating images
│   ├── meet1-4.png        # Team member images
│   ├── Story.png          # About page image
│   ├── Gift.png           # Gift cards page image
│   ├── Commitment.png     # Sustainability page image
│   ├── Ask.png            # FAQ page image
│   ├── blog.png           # Blog page image
│   ├── contact.png        # Contact page image
│   └── Family.png         # Newsletter image
│
├── src/
│   ├── assets/            # Bundled assets
│   │   └── product-*.jpg  # Product images
│   │
│   ├── components/        # Reusable components
│   │   ├── cart/         # Shopping cart components
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSidebar.tsx
│   │   │
│   │   ├── home/         # Home page sections
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── FeaturedProductsSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── NewsletterSection.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   │
│   │   ├── layout/       # Layout components
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── PageHero.tsx
│   │   │
│   │   ├── navigation/   # Navigation components
│   │   │   └── Breadcrumbs.tsx
│   │   │
│   │   ├── products/     # Product-related components
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── ProductReviews.tsx
│   │   │   ├── QuantitySelector.tsx
│   │   │   ├── RelatedProducts.tsx
│   │   │   └── SizeSelector.tsx
│   │   │
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   │
│   │   └── ui/           # Shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── progress.tsx
│   │       ├── sonner.tsx
│   │       ├── textarea.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   │
│   ├── context/          # React context providers
│   │   └── CartContext.tsx
│   │
│   ├── data/             # Static data and mock data
│   │   └── products.ts   # Product catalog data
│   │
│   ├── hooks/            # Custom React hooks
│   │   └── use-toast.ts
│   │
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Helper functions
│   │
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Cart.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── GiftCards.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Products.tsx
│   │   ├── Profile.tsx
│   │   ├── Returns.tsx
│   │   ├── Search.tsx
│   │   ├── Shipping.tsx
│   │   ├── Sustainability.tsx
│   │   ├── Terms.tsx
│   │   └── Wishlist.tsx
│   │
│   ├── types/            # TypeScript type definitions
│   │   └── product.ts
│   │
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite type definitions
│
├── docs/                 # Documentation
│   ├── CHANGELOG.md
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── FEATURES.md
│   ├── SECURITY.md
│   ├── STRUCTURE.md
│   ├── STYLES.md
│   ├── TECHNOLOGIES.md
│   └── USE_CASES.md
│
├── .gitignore           # Git ignore rules
├── components.json      # Shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # App TypeScript config
├── tsconfig.node.json   # Node TypeScript config
└── vite.config.ts       # Vite configuration
```

## Component Organization

### UI Components (`src/components/ui/`)
Reusable, low-level UI components from Shadcn/ui library. These are the building blocks for the application.

**Purpose:** Provide consistent, accessible, and customizable UI elements.

### Feature Components (`src/components/`)
Higher-level components organized by feature or domain.

#### Cart Components
- **CartItem** - Individual cart item display
- **CartSidebar** - Sliding cart panel

#### Home Components
- **CategoriesSection** - Product category grid
- **FeaturedProductsSection** - Featured products showcase
- **HeroSection** - Homepage hero banner
- **NewsletterSection** - Email subscription
- **TestimonialsSection** - Customer testimonials

#### Layout Components
- **Footer** - Site footer with links
- **Header** - Navigation header
- **PageHero** - Reusable page hero section

#### Product Components
- **CategoryCard** - Category display card
- **ImageGallery** - Product image viewer
- **ProductCard** - Product grid item
- **ProductInfo** - Product details display
- **ProductReviews** - Review system
- **QuantitySelector** - Quantity input
- **RelatedProducts** - Related items
- **SizeSelector** - Size selection

## Page Organization

### Public Pages
- **Index** - Homepage
- **Products** - Product listing
- **ProductDetail** - Individual product
- **Blog** - Blog listing
- **BlogPost** - Individual article
- **About** - Company information
- **Contact** - Contact form
- **FAQ** - Frequently asked questions

### E-commerce Pages
- **Cart** - Shopping cart
- **Wishlist** - Saved products
- **Search** - Product search

### Utility Pages
- **Profile** - User account
- **GiftCards** - Gift card information
- **Sustainability** - Eco-friendly practices
- **Shipping** - Shipping information
- **Returns** - Return policy
- **Privacy** - Privacy policy
- **Terms** - Terms of service
- **NotFound** - 404 error page

## Data Organization

### Product Data (`src/data/products.ts`)
```typescript
export const products: Product[] = [...]
export const categories: Category[] = [...]
export const ageFilters: AgeFilter[] = [...]
```

### Type Definitions (`src/types/product.ts`)
```typescript
interface Product { ... }
interface Category { ... }
interface AgeFilter { ... }
```

## Context Organization

### CartContext (`src/context/CartContext.tsx`)
Manages shopping cart state and operations:
- Add to cart
- Remove from cart
- Update quantity
- Clear cart
- Cart item count
- Cart total

## Routing Structure

```typescript
/                          → Index (Homepage)
/products                  → Products (Listing)
/products/:slug            → ProductDetail
/blog                      → Blog (Listing)
/blog/:slug                → BlogPost
/cart                      → Cart
/wishlist                  → Wishlist
/profile                   → Profile
/search                    → Search
/contact                   → Contact
/faq                       → FAQ
/shipping                  → Shipping
/returns                   → Returns
/about                     → About
/gift-cards                → GiftCards
/sustainability            → Sustainability
/privacy                   → Privacy
/terms                     → Terms
*                          → NotFound
```

## Styling Organization

### Global Styles (`src/index.css`)
- Tailwind directives
- CSS variables for theming
- Custom font imports
- Base layer styles
- Component layer styles
- Utility layer styles

### Tailwind Configuration (`tailwind.config.ts`)
- Custom colors
- Font families
- Spacing scale
- Border radius
- Shadows
- Animations

## Build Output

### Development
```
http://localhost:8080/
```

### Production (`dist/`)
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]-[hash].jpg
└── index.html
```

## Configuration Files

### TypeScript
- **tsconfig.json** - Base configuration
- **tsconfig.app.json** - App-specific config
- **tsconfig.node.json** - Node-specific config

### Build Tools
- **vite.config.ts** - Vite configuration
- **postcss.config.js** - PostCSS plugins
- **tailwind.config.ts** - Tailwind customization

### Code Quality
- **eslint.config.js** - Linting rules
- **.gitignore** - Git exclusions

### Component Library
- **components.json** - Shadcn/ui settings

## Best Practices

### File Naming
- **Components** - PascalCase (e.g., `ProductCard.tsx`)
- **Utilities** - camelCase (e.g., `utils.ts`)
- **Types** - camelCase (e.g., `product.ts`)
- **Pages** - PascalCase (e.g., `Products.tsx`)

### Import Organization
1. External libraries
2. Internal components
3. Types
4. Utilities
5. Styles

### Component Structure
```typescript
// 1. Imports
import { ... } from 'react';

// 2. Types/Interfaces
interface Props { ... }

// 3. Component
export function Component({ ... }: Props) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Handlers
  const handleClick = () => { ... };
  
  // 6. Render
  return ( ... );
}
```

## Scalability Considerations

### Adding New Features
1. Create feature components in `src/components/[feature]/`
2. Add page in `src/pages/`
3. Update routing in `App.tsx`
4. Add types in `src/types/`
5. Update documentation

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Header.tsx` or `Footer.tsx`
4. Add breadcrumbs if needed

### Adding New Components
1. Create component in appropriate folder
2. Export from index file if needed
3. Add to Storybook (if using)
4. Document props and usage
