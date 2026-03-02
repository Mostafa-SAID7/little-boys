import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { PageHero } from '@/components/layout/PageHero';
import { Leaf, Recycle, Heart, Package } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title="Our Commitment"
          description="We believe in creating a better world for the little ones we serve. Every choice we make is guided by our commitment to the planet."
          image="/Commitment.png"
          imageAlt="Our Commitment to Sustainability"
        />

        {/* Content */}
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Eco-Friendly Materials */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded bg-green-100 dark:bg-green-900/30">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Eco-Friendly Materials</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We carefully select products made from sustainable, organic, and non-toxic materials. From organic cotton clothing to wooden toys crafted from responsibly sourced wood, every item in our collection meets strict environmental standards.
                </p>
                <ul className="space-y-2 mt-4">
                  <li>GOTS certified organic cotton</li>
                  <li>FSC certified wood products</li>
                  <li>Non-toxic, water-based paints and dyes</li>
                  <li>Recycled and recyclable packaging</li>
                </ul>
              </div>
            </section>

            {/* Sustainable Packaging */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded bg-blue-100 dark:bg-blue-900/30">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Sustainable Packaging</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Our packaging is 100% recyclable and made from recycled materials. We've eliminated plastic wherever possible and use biodegradable alternatives. Every package is designed to minimize waste while ensuring your products arrive safely.
                </p>
              </div>
            </section>

            {/* Circular Economy */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded bg-purple-100 dark:bg-purple-900/30">
                  <Recycle className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Circular Economy</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  We encourage our customers to recycle, donate, or return products they no longer need. Our take-back program ensures that items are either refurbished for resale or responsibly recycled, keeping them out of landfills.
                </p>
              </div>
            </section>

            {/* Community Impact */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded bg-pink-100 dark:bg-pink-900/30">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">Community Impact</h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-10">
                  We partner with organizations that support children's education and environmental conservation. A portion of every purchase goes toward planting trees and supporting educational programs in underserved communities.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Sustainability;
