import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { ProductCard } from '@/components/products/ProductCard';
import { AgeFilterBar } from '@/components/products/AgeFilterBar';
import { products, categories, ageFilters } from '@/data/products';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Grid3X3, List, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.categories.includes(selectedCategory));
    }

    // Filter by age
    if (selectedAge) {
      const ageFilter = ageFilters.find(f => f.id === selectedAge);
      if (ageFilter) {
        result = result.filter(p =>
          p.ageRange.min <= ageFilter.range.max && p.ageRange.max >= ageFilter.range.min
        );
      }
    }

    // Filter by special filters
    if (filterParam === 'new') {
      result = result.filter(p => p.isNew);
    } else if (filterParam === 'bestseller') {
      result = result.filter(p => p.isBestseller);
    } else if (filterParam === 'sale') {
      result = result.filter(p => p.originalPrice);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured: bestsellers first
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedAge, filterParam, sortBy]);

  const getPageTitle = () => {
    if (filterParam === 'new') return 'New Arrivals';
    if (filterParam === 'bestseller') return 'Bestsellers';
    if (filterParam === 'sale') return 'Sale';
    if (selectedCategory) {
      const cat = categories.find(c => c.slug === selectedCategory);
      return cat ? cat.name : 'Products';
    }
    return 'All Products';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/20">
        {/* Page header */}
        <div className="bg-background border-b border-border py-8">
          <div className="container">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {getPageTitle()}
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Filters */}
          <div className="mb-8">
            <AgeFilterBar selectedAge={selectedAge} onSelect={setSelectedAge} />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={selectedCategory === null ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.slug ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.icon} {cat.name}
              </Button>
            ))}
          </div>

          {/* Sort & view controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant={viewMode === 'grid' ? 'soft' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'soft' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <span className="text-6xl block mb-4">🔍</span>
              <h2 className="font-display text-xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          ) : (
            <div
              className={cn(
                "grid gap-6",
                viewMode === 'grid'
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              )}
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Products;
