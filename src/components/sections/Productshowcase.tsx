import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop"
                alt="Moonstone Cascade Earrings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/api/placeholder/150/150"
                    alt={`Moonstone earrings view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              <Badge variant="destructive">New Arrival</Badge>
              <Badge variant="secondary">One of a Kind</Badge>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Moonstone Cascade Earrings
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 (47 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">$189.00</span>
              </div>
              <p className="text-sm text-primary">Handcrafted with ethically sourced stones</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Ethereal moonstone drops cascade gracefully from sterling silver hooks, catching light
              with every movement. Each stone is hand-selected for its unique blue flash and natural
              beauty, making these earrings truly one-of-a-kind.
            </p>

            {/* Metal Options */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Metal: Sterling Silver</span>
              <div className="flex gap-2">
                {['bg-card border-2', 'bg-accent', 'bg-primary'].map((color, i) => (
                  <button
                    key={i}
                    className={`size-10 rounded-full ${color} hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all ${
                      i === 0 ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>Sterling Silver</span>
                <span>14k Gold Fill</span>
                <span>Rose Gold</span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button variant="ghost" size="icon" className="rounded-r-none">
                  <Minus className="size-4" />
                </Button>
                <span className="px-4 py-2 min-w-[50px] text-center">1</span>
                <Button variant="ghost" size="icon" className="rounded-l-none">
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1 gap-2">
                <ShoppingCart className="size-5" />
                Add to Collection
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="size-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-muted">
              <div className="flex items-center gap-2">
                <Truck className="size-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-primary" />
                <span className="text-sm">Lifetime Care</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="size-5 text-primary" />
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-5 text-primary" />
                <span className="text-sm">Ready to Ship</span>
              </div>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Genuine rainbow moonstone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Sterling silver ear wires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">2.5 inch total length</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Handcrafted in our studio</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="care" className="mt-4">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Cleaning:</dt>
                    <dd className="font-medium">Soft cloth only</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Storage:</dt>
                    <dd className="font-medium">Separate compartments</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Water:</dt>
                    <dd className="font-medium">Remove before swimming</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Polishing:</dt>
                    <dd className="font-medium">Professional recommended</dd>
                  </div>
                </dl>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <p className="text-muted-foreground">
                  47 customers have rated these earrings with an average of 5.0 stars. "Absolutely
                  stunning craftsmanship and the moonstones are magical!" - Sarah M.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
