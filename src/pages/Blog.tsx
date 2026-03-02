import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Educational Toys for Toddlers',
    excerpt: 'Discover the best toys that combine fun and learning for your little one\'s development.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    image: '/blog1.jpg',
    category: 'Toys',
  },
  {
    id: 2,
    title: 'Sustainable Fashion for Kids: A Parent\'s Guide',
    excerpt: 'Learn how to build an eco-friendly wardrobe for your children without breaking the bank.',
    author: 'Emily Chen',
    date: 'March 10, 2024',
    image: '/blog2.jpg',
    category: 'Fashion',
  },
  {
    id: 3,
    title: 'Building a Reading Habit: Books for Every Age',
    excerpt: 'Age-appropriate book recommendations to foster a love of reading from infancy to pre-teens.',
    author: 'Michael Brown',
    date: 'March 5, 2024',
    image: '/blog3.jpg',
    category: 'Books',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8 md:py-24">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Little Boys Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and inspiration for raising curious, creative, and happy children.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="container py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-card rounded overflow-hidden border border-border hover:shadow-card transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-8 p-8 bg-muted/50 rounded">
            <span className="text-6xl block mb-4">📝</span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">More Articles Coming Soon</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to get notified when we publish new content!
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
};

export default Blog;
