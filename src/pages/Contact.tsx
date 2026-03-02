import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>

        <section className="container pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-5xl block mb-4">💬</span>
              <h1 className="font-display text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Have a question? We'd love to hear from you. Send us a message and we'll 
                respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact info */}
              <div className="space-y-6">
                <div className="bg-muted rounded-2xl p-6">
                  <Mail className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">hello@littleboys.com</p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <Phone className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">1-800-LITTLEBOYS</p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <MapPin className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    123 Imagination Lane<br />
                    San Francisco, CA 94102
                  </p>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <Clock className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: 9am - 6pm PST<br />
                    Sat-Sun: 10am - 4pm PST
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Contact;
