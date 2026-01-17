import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Spring Collection 2024</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Discover the Magic of{' '}
              <span className="text-primary">Childhood</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Curated toys, cozy clothes, and wonderful books for curious little minds. 
              Safe, sustainable, and designed to inspire joy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="hero" size="xl">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/products?filter=new">
                  New Arrivals
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-lg">🚚</span> Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lg">↩️</span> Easy Returns
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lg">🌿</span> Eco-Friendly
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-secondary/30 animate-pulse" />
              </div>
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-primary/20" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 text-5xl animate-float">🧸</div>
              <div className="absolute top-1/4 right-0 text-4xl animate-float" style={{ animationDelay: '1s' }}>📚</div>
              <div className="absolute bottom-1/4 left-0 text-4xl animate-float" style={{ animationDelay: '2s' }}>🎨</div>
              <div className="absolute bottom-4 right-8 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🌈</div>
              
              {/* Central content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-card rounded-3xl shadow-float p-8 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-7xl block mb-4">🎁</span>
                  <p className="font-display font-bold text-xl text-foreground">Up to</p>
                  <p className="font-display font-bold text-4xl text-primary">30% OFF</p>
                  <p className="text-muted-foreground text-sm mt-1">Spring Sale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
