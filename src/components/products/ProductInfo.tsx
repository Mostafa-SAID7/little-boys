import { Star, Heart, Share2, Truck, RotateCcw, Shield, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';

interface ProductInfoProps {
  product: Product;
}

function getAgeBadgeVariant(ageRange: { min: number; max: number }) {
  if (ageRange.max <= 2) return 'baby';
  if (ageRange.max <= 4) return 'toddler';
  if (ageRange.max <= 8) return 'kids';
  return 'tweens';
}

export function ProductInfo({ product }: ProductInfoProps) {
  const discountPercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-4">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {product.isNew && <Badge variant="new">New Arrival</Badge>}
        {product.isBestseller && <Badge variant="bestseller">Bestseller</Badge>}
        {discountPercent > 0 && <Badge variant="sale">{discountPercent}% Off</Badge>}
        <Badge variant={getAgeBadgeVariant(product.ageRange)}>
          Ages {product.ageRange.min}-{product.ageRange.max}
        </Badge>
      </div>

      {/* Title */}
      <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-category-toys text-category-toys'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
        <span className="font-semibold">{product.rating}</span>
        <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold text-foreground">
          ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-muted-foreground line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      {product.badges && product.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.badges.map((badge) => (
            <Badge key={badge} variant="eco" className="gap-1">
              <Leaf className="h-3 w-3" />
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {/* Stock */}
      <div className="text-sm">
        {product.stock > 10 ? (
          <span className="text-secondary font-medium">✓ In Stock</span>
        ) : product.stock > 0 ? (
          <span className="text-primary font-medium">Only {product.stock} left!</span>
        ) : (
          <span className="text-destructive font-medium">Out of Stock</span>
        )}
      </div>
    </div>
  );
}

export function ProductBenefits() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-xl">
      <div className="flex items-center gap-2 text-sm">
        <Truck className="h-4 w-4 text-primary" />
        <span>Free shipping over $50</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <RotateCcw className="h-4 w-4 text-primary" />
        <span>30-day easy returns</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Shield className="h-4 w-4 text-primary" />
        <span>Safety tested</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Leaf className="h-4 w-4 text-primary" />
        <span>Eco-friendly</span>
      </div>
    </div>
  );
}

export function ProductActions() {
  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-label="Add to wishlist"
      >
        <Heart className="h-5 w-5" />
        <span>Add to Wishlist</span>
      </button>
      <button
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-label="Share product"
      >
        <Share2 className="h-5 w-5" />
        <span>Share</span>
      </button>
    </div>
  );
}
