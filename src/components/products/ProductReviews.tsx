import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-01-15',
    title: 'Perfect for my toddler!',
    content: 'The quality is amazing and my daughter loves it. It has become her favorite toy. Highly recommend for any parent looking for safe, educational toys.',
    helpful: 12,
    verified: true,
  },
  {
    id: '2',
    author: 'James P.',
    rating: 4,
    date: '2024-01-10',
    title: 'Great quality, slightly pricey',
    content: 'Beautiful craftsmanship and my son enjoys playing with it. The only reason for 4 stars is the price, but you get what you pay for.',
    helpful: 8,
    verified: true,
  },
  {
    id: '3',
    author: 'Emma K.',
    rating: 5,
    date: '2024-01-05',
    title: 'Exceeded expectations!',
    content: 'Bought this as a gift and it was a huge hit. The colors are beautiful and it feels very durable. Will definitely buy from here again.',
    helpful: 15,
    verified: true,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 7 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 1 },
];

export function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Rating summary */}
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <div className="text-center mb-6">
              <div className="text-5xl font-display font-bold text-foreground mb-2">
                {rating}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating)
                        ? 'fill-category-toys text-category-toys'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{reviewCount} reviews</p>
            </div>

            <div className="space-y-3">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm w-12">{item.stars} stars</span>
                  <Progress value={item.percentage} className="h-2 flex-1" />
                  <span className="text-sm text-muted-foreground w-10">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6">Write a Review</Button>
          </div>

          {/* Reviews list */}
          <div className="md:col-span-2 space-y-6">
            {mockReviews.map((review) => (
              <article
                key={review.id}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold">{review.author}</span>
                      {review.verified && (
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? 'fill-category-toys text-category-toys'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {review.content}
                </p>

                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </article>
            ))}

            <Button variant="outline" className="w-full">
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
