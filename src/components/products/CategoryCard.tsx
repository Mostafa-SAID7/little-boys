import { Link } from 'react-router-dom';
import { Category } from '@/types/product';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-card overflow-hidden",
        category.color,
        className
      )}
    >
      <span className="text-4xl md:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle">
        {category.icon}
      </span>
      <h3 className="font-display font-bold text-foreground text-center">
        {category.name}
      </h3>
      <p className="text-sm text-foreground/70 mt-1">
        {category.productCount} items
      </p>
    </Link>
  );
}
