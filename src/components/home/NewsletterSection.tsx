import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to the family! 🎉', {
        description: 'Check your inbox for a special welcome offer.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/Family.png"
              alt="Happy family"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Family
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe for exclusive deals, new arrivals, and parenting tips. 
              Plus, get 10% off your first order!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-xl"
                required
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
