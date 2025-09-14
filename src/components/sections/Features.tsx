import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Shield, Truck, Heart, Award, Palette, Sparkles, Users, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Gem,
      title: 'Authentic Gemstones',
      description:
        'Each piece features carefully selected genuine gemstones sourced from trusted artisan miners worldwide.',
      badge: 'Quality',
    },
    {
      icon: Sparkles,
      title: 'Handcrafted Excellence',
      description:
        'Every jewelry piece is meticulously handcrafted by skilled artisans using traditional techniques passed down through generations.',
      badge: 'Craftsmanship',
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description:
        'Work with our master jewelers to create bespoke pieces that reflect your personal style and story.',
      badge: 'Personalization',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description:
        'We stand behind our craftsmanship with comprehensive lifetime warranty on all structural elements.',
      badge: 'Guarantee',
    },
    {
      icon: Truck,
      title: 'Secure Delivery',
      description:
        'Complimentary insured shipping with signature confirmation and elegant gift packaging included.',
      badge: 'Shipping',
    },
    {
      icon: Award,
      title: 'Certified Authenticity',
      description:
        'Each piece comes with detailed certification documenting gemstone origins and precious metal purity.',
      badge: 'Certification',
    },
    {
      icon: Heart,
      title: 'Ethical Sourcing',
      description:
        'We partner exclusively with fair-trade suppliers who support local artisan communities and sustainable practices.',
      badge: 'Ethics',
    },
    {
      icon: Users,
      title: 'Personal Consultation',
      description:
        'Schedule one-on-one sessions with our jewelry experts to find the perfect piece for any occasion.',
      badge: 'Service',
    },
    {
      icon: Clock,
      title: 'Heirloom Quality',
      description:
        'Built to last generations, our jewelry maintains its beauty and structural integrity over decades of wear.',
      badge: 'Durability',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Artisan Gems
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Jewelry That Tells
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Unique Story
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the artistry and passion behind every handcrafted piece. From ethically sourced
            gemstones to master craftsmanship, we create jewelry that celebrates your individuality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to discover your perfect piece?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
