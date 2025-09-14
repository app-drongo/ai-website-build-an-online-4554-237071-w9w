import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Signature Rings', href: '/collections/rings' },
        { name: 'Artisan Necklaces', href: '/collections/necklaces' },
        { name: 'Handcrafted Earrings', href: '/collections/earrings' },
        { name: 'Custom Bracelets', href: '/collections/bracelets' },
        { name: 'Gemstone Pendants', href: '/collections/pendants' },
        { name: 'Limited Editions', href: '/collections/limited' },
      ],
    },
    {
      title: 'About Artisan Gems',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Artisan Partners', href: '/artisans' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Press & Awards', href: '/press' },
        { name: 'Visit Our Studio', href: '/studio' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Jewelry Care Guide', href: '/care-guide' },
        { name: 'Size Guide', href: '/sizing' },
        { name: 'Custom Orders', href: '/custom' },
        { name: 'Repair Services', href: '/repairs' },
        { name: 'Gift Wrapping', href: '/gift-wrapping' },
        { name: 'VIP Program', href: '/vip' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Return Policy', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Authenticity Guarantee', href: '/authenticity' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Payment Security', href: '/security' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/artisangems' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/artisangems' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/artisangems' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/artisangems' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AG</span>
                </div>
                <span className="font-bold text-xl">Artisan Gems</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Discover extraordinary handcrafted jewelry that tells your unique story. Each piece
                is meticulously created by skilled artisans using ethically sourced materials and
                time-honored techniques.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@artisangems.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-2963</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">127 Artisan Quarter, Design District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Collection Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for new arrivals"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Be first to discover new collections and receive exclusive member offers.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Artisan Gems. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> by master
                artisans
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookie-preferences"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/jewelry-consultation"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
