import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Truck, RotateCcw, Leaf } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="container py-8 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded text-sm font-medium mb-6">
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
                <Truck className="h-5 w-5" /> Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5" /> Easy Returns
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="h-5 w-5" /> Eco-Friendly
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded bg-secondary/30 animate-pulse" />
              </div>
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="w-full h-full rounded bg-primary/20" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 animate-float z-10">
                <img src="/m1.png" alt="Toy" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
              </div>
              <div className="absolute -top-8 -right-8 animate-bounce-soft z-10" style={{ animationDelay: '1s' }}>
                <img src="/m2.png" alt="Book" className="w-36 h-36 md:w-48 md:h-48 object-contain" />
              </div>
              <div className="absolute -bottom-8 -left-8 animate-scale-pulse z-10" style={{ animationDelay: '2s' }}>
                <img src="/m3.png" alt="Art" className="w-36 h-36 md:w-48 md:h-48 object-contain" />
              </div>
              <div className="absolute -bottom-8 -right-8 animate-wiggle z-10" style={{ animationDelay: '0.5s' }}>
                <img src="/m4.png" alt="Rainbow" className="w-40 h-40 md:w-56 md:h-56 object-contain" />
              </div>
              
              {/* Central content */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="bg-card rounded shadow-float p-8 text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
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
