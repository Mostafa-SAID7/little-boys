import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>

        {/* Hero */}
        <section className="container pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-6xl block mb-6">💝</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LittleWonders was founded by parents who believe that childhood should be filled 
              with wonder, joy, and discovery. We curate the finest toys, clothes, and books 
              that inspire imagination and support healthy development.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <span className="text-5xl block mb-4">🌿</span>
                <h3 className="font-display text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We prioritize eco-friendly materials and ethical manufacturing to protect 
                  our planet for future generations.
                </p>
              </div>
              <div className="text-center p-6">
                <span className="text-5xl block mb-4">🛡️</span>
                <h3 className="font-display text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Every product is rigorously tested to meet the highest safety standards. 
                  Your child's wellbeing is our top priority.
                </p>
              </div>
              <div className="text-center p-6">
                <span className="text-5xl block mb-4">✨</span>
                <h3 className="font-display text-xl font-bold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We select only the best products that are built to last, becoming treasured 
                  companions throughout childhood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Emma Johnson', role: 'Founder & CEO', emoji: '👩‍💼' },
                { name: 'Michael Chen', role: 'Head of Products', emoji: '👨‍💻' },
                { name: 'Sarah Williams', role: 'Customer Experience', emoji: '👩‍🎨' },
                { name: 'David Brown', role: 'Operations', emoji: '👨‍🔧' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-4xl mx-auto mb-4">
                    {member.emoji}
                  </div>
                  <h3 className="font-display font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default About;
