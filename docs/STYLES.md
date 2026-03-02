# Styling Guidelines

Comprehensive guide to the styling system used in Little Boys e-commerce platform.

## Design System

### Color Palette

#### Primary Colors
```css
--primary: 142 76% 36%        /* Main brand color */
--primary-foreground: 0 0% 100%  /* Text on primary */
```

#### Secondary Colors
```css
--secondary: 142 30% 96%      /* Accent color */
--secondary-foreground: 142 5% 10%  /* Text on secondary */
```

#### Neutral Colors
```css
--background: 0 0% 100%       /* Page background */
--foreground: 142 5% 10%      /* Main text color */
--card: 0 0% 100%             /* Card background */
--card-foreground: 142 5% 10% /* Card text */
--muted: 142 30% 96%          /* Muted background */
--muted-foreground: 142 5% 45%  /* Muted text */
```

#### Border & Input
```css
--border: 142 30% 90%         /* Border color */
--input: 142 30% 90%          /* Input border */
--ring: 142 76% 36%           /* Focus ring */
```

#### Status Colors
```css
--destructive: 0 84% 60%      /* Error/delete */
--destructive-foreground: 0 0% 98%  /* Text on destructive */
```

#### Category Colors
```css
--category-toys: 45 93% 58%   /* Toys category */
--category-clothes: 280 65% 60%  /* Clothing category */
--category-books: 200 98% 39%  /* Books category */
--category-outdoor: 142 71% 45%  /* Outdoor category */
```

### Typography

#### Font Families
```css
--font-display: 'Quicksand', sans-serif;  /* Headings */
--font-body: 'Nunito', sans-serif;        /* Body text */
```

#### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

#### Font Sizes
```css
text-xs: 0.75rem    /* 12px */
text-sm: 0.875rem   /* 14px */
text-base: 1rem     /* 16px */
text-lg: 1.125rem   /* 18px */
text-xl: 1.25rem    /* 20px */
text-2xl: 1.5rem    /* 24px */
text-3xl: 1.875rem  /* 30px */
text-4xl: 2.25rem   /* 36px */
text-5xl: 3rem      /* 48px */
```

### Spacing Scale

```css
0: 0px
1: 0.25rem   /* 4px */
2: 0.5rem    /* 8px */
3: 0.75rem   /* 12px */
4: 1rem      /* 16px */
5: 1.25rem   /* 20px */
6: 1.5rem    /* 24px */
8: 2rem      /* 32px */
10: 2.5rem   /* 40px */
12: 3rem     /* 48px */
16: 4rem     /* 64px */
20: 5rem     /* 80px */
24: 6rem     /* 96px */
```

### Border Radius

```css
rounded-none: 0px
rounded-sm: 0.125rem    /* 2px */
rounded: 0.25rem        /* 4px - Standard */
rounded-md: 0.375rem    /* 6px */
rounded-lg: 0.5rem      /* 8px */
rounded-xl: 0.75rem     /* 12px */
rounded-2xl: 1rem       /* 16px */
rounded-3xl: 1.5rem     /* 24px */
rounded-full: 9999px    /* Circle */
```

**Note:** Project uses `rounded` (4px) as standard for consistency.

### Shadows

```css
shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.08)
shadow-card: 0 4px 16px rgba(0, 0, 0, 0.12)
shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15)
```

## Component Styling

### Buttons

#### Variants
```tsx
<Button variant="default">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="destructive">Delete</Button>
```

#### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon</Button>
```

### Cards

```tsx
<div className="bg-card rounded shadow-soft p-6">
  <h3 className="font-display font-bold">Card Title</h3>
  <p className="text-muted-foreground">Card content</p>
</div>
```

### Inputs

```tsx
<Input 
  className="rounded border-input focus:ring-ring"
  placeholder="Enter text..."
/>
```

### Badges

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="new">New</Badge>
<Badge variant="bestseller">Bestseller</Badge>
<Badge variant="sale">Sale</Badge>
<Badge variant="eco">Eco-Friendly</Badge>
<Badge variant="baby">Baby</Badge>
<Badge variant="toddler">Toddler</Badge>
<Badge variant="kids">Kids</Badge>
<Badge variant="tweens">Tweens</Badge>
```

## Layout Patterns

### Container
```tsx
<div className="container">
  {/* Max-width centered content */}
</div>
```

### Grid Layouts
```tsx
{/* 2 columns on mobile, 4 on desktop */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {/* Grid items */}
</div>

{/* Responsive product grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Products */}
</div>
```

### Flex Layouts
```tsx
{/* Horizontal flex with gap */}
<div className="flex items-center gap-4">
  {/* Flex items */}
</div>

{/* Vertical flex */}
<div className="flex flex-col space-y-4">
  {/* Stacked items */}
</div>
```

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Usage
```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## Animations

### Transitions
```css
transition-all: all 0.3s ease
transition-colors: colors 0.3s ease
transition-transform: transform 0.3s ease
```

### Hover Effects
```tsx
<div className="hover:scale-105 transition-transform">
  Scale on hover
</div>

<div className="hover:shadow-card transition-shadow">
  Shadow on hover
</div>

<div className="hover:text-primary transition-colors">
  Color change on hover
</div>
```

### Custom Animations
```css
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
```

## Theme Support

### Dark Mode
```tsx
<div className="bg-background text-foreground">
  {/* Automatically adapts to theme */}
</div>
```

### Theme Toggle
```tsx
import { ThemeToggle } from '@/components/theme-toggle';

<ThemeToggle />
```

## Accessibility

### Focus States
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
  Accessible button
</button>
```

### Screen Reader Only
```tsx
<span className="sr-only">
  Screen reader only text
</span>
```

### ARIA Labels
```tsx
<button aria-label="Close menu">
  <X className="h-5 w-5" />
</button>
```

## Best Practices

### Consistent Spacing
- Use `py-8` for section padding
- Use `gap-6` for grid spacing
- Use `space-y-4` for vertical stacking
- Use `mb-8` for section margins

### Consistent Borders
- Use `rounded` for all rounded corners
- Use `border-border` for border colors
- Use `border` for 1px borders

### Consistent Colors
- Use semantic color variables
- Avoid hardcoded colors
- Use `text-foreground` for main text
- Use `text-muted-foreground` for secondary text

### Consistent Typography
- Use `font-display` for headings
- Use default font for body text
- Use `font-bold` for emphasis
- Use `text-muted-foreground` for less important text

## Component Examples

### Product Card
```tsx
<article className="bg-card rounded shadow-soft hover:shadow-card transition-all">
  <div className="aspect-square bg-muted rounded overflow-hidden">
    <img className="w-full h-full object-cover" />
  </div>
  <div className="p-4">
    <h3 className="font-display font-semibold">Product Name</h3>
    <p className="text-muted-foreground">Description</p>
    <div className="flex items-center justify-between mt-4">
      <span className="font-bold">$29.99</span>
      <Button size="sm">Add to Cart</Button>
    </div>
  </div>
</article>
```

### Page Hero
```tsx
<section className="py-8 md:py-20">
  <div className="container">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Page Title
        </h1>
        <p className="text-lg text-muted-foreground">
          Page description
        </p>
      </div>
      <div>
        <img className="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
```

### Form
```tsx
<form className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter your name" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
  <Button type="submit">Submit</Button>
</form>
```

## Performance Considerations

### CSS Optimization
- Tailwind purges unused styles
- Critical CSS inlined
- Non-critical CSS deferred

### Animation Performance
- Use `transform` and `opacity` for animations
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### Image Optimization
- Use appropriate image formats (WebP)
- Lazy load images
- Use responsive images
- Compress images

## Maintenance

### Adding New Colors
1. Add to `tailwind.config.ts`
2. Add CSS variables to `index.css`
3. Document in this file

### Adding New Components
1. Follow existing patterns
2. Use semantic class names
3. Ensure accessibility
4. Test in both themes

### Updating Styles
1. Check for breaking changes
2. Update documentation
3. Test responsive behavior
4. Verify accessibility
