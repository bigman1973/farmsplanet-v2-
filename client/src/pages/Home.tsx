import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StatBox, ProductCard, IconFeature, TimelineItem } from "@/components/ReusableComponents";
import { 
  Award, 
  Leaf, 
  Heart, 
  Dna, 
  Truck, 
  Shield, 
  Headphones,
  Star,
  Clock,
  CheckCircle,
  Ship,
  FileText,
  Thermometer,
  Settings
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: "",
    requestCatalog: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll contact you soon.");
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      interest: "",
      message: "",
      requestCatalog: false
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/hero-peach-fields.jpg')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative z-10 container text-center text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Premium Spanish Food Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for authentic Mediterranean excellence
          </p>
          <div className="inline-flex items-center gap-3 bg-accent/90 text-accent-foreground px-6 py-3 rounded-full mb-8">
            <Clock size={24} />
            <span className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>200+ Years of Tradition</span>
            <span className="text-sm opacity-90">Since 1819</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Discover Our Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatBox number="200+" label="Years of Tradition" sublabel="Since 1819" />
            <StatBox number="15+" label="Countries Served" sublabel="Worldwide" />
            <StatBox number="100%" label="Quality Commitment" sublabel="Certified Premium" />
            <StatBox number="400" label="Hectares" sublabel="In Production" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five generations of dedication to authentic Mediterranean flavors, from the heart of Spain to the world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/peach-blossoms.jpg" 
                alt="Peach orchards" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <TimelineItem 
                year="1819" 
                title="Foundation" 
                description="Mikel's Earth was founded in Catalonia, beginning a legacy of agricultural excellence that would span centuries."
              />
              <TimelineItem 
                year="5th Gen" 
                title="Family Tradition" 
                description="Now in our fifth generation, we continue to honor traditional methods while embracing sustainable innovation."
              />
              <TimelineItem 
                year="2022-25" 
                title="International Recognition" 
                description="World's Best Olive Oils Gold Awards (2022, 2024) and Olive Japan Gold Medal (2025) confirm our commitment to quality."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Alcarràs, Catalonia
                </h3>
                <p className="text-muted-foreground mb-4">
                  Located in the world's leading stone fruits production region, our 400-hectare groves benefit from ideal Mediterranean climate and centuries of expertise. This is where our premium peaches, nectarines, and the unique Paraguayo are cultivated.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Leaf size={20} />
                  <span>Europe's Leading Stone Fruits Region</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Córdoba, Andalusia
                </h3>
                <p className="text-muted-foreground mb-4">
                  In the heart of Andalusia's olive country, we produce award-winning extra virgin olive oil that has earned international acclaim. Our organic production methods honor the land and deliver exceptional flavor.
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Award size={20} />
                  <span>World's Best Olive Oils Gold Award</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Premium Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From sun-ripened stone fruits to award-winning olive oil, every product embodies our commitment to Mediterranean authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800"
              title="Paraguayo (Flat Peach)"
              description="World's only producer of Paraguayo in light syrup. Handcrafted following traditional family methods with exceptional sweetness and delicate flavor."
              badge="⭐ Exclusive"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800"
              title="Extra Virgin Olive Oil"
              description="Award-winning organic olive oil from Córdoba. Gold Medal winner at Olive Japan 2025 and World's Best Olive Oils 2022 & 2024."
              badge="🏆 Award Winner"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1629828874514-d05b9f80c5f6?w=800"
              title="Stone Fruits"
              description="Premium peaches, nectarines, and flat peaches from our 400-hectare orchards in Alcarràs, Europe's leading stone fruits region."
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800"
              title="Golden Apple Juice NFC"
              description="100% natural Golden Apple juice, not from concentrate. Pure fruit flavor with zero additives from our Catalonian orchards."
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1587049352846-4a222e784e38?w=800"
              title="Fruit Preserves"
              description="Traditional jams and preserves made with minimal industrial processing. Authentic taste preserved in every jar since 1819."
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800"
              title="Arbequina Olives"
              description="Premium Arbequina olive variety born in Lleida. Delicate flavor and smooth texture, perfect for gourmet markets."
            />
          </div>
        </div>
      </section>

      {/* Paraguayo Signature Product */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629828874514-d05b9f80c5f6?w=800" 
                alt="Paraguayo Product" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold mb-4">
                ⭐ WORLD'S ONLY PRODUCER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Paraguayo - Our Signature Product
              </h2>
              <p className="text-lg text-muted-foreground">
                Paraguayo, also known as flat peach or donut peach, is a unique variety of peach with exceptional sweetness and delicate flavor. Mikel's is the only company in the world producing this specialty fruit in light syrup, making it an exclusive offering for discerning markets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Award size={24} className="text-accent" />
                    <h3 className="font-bold text-lg">Handcrafted</h3>
                  </div>
                  <p className="text-sm opacity-90">Each jar made by hand following traditional family methods</p>
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Star size={24} className="text-accent" />
                    <h3 className="font-bold text-lg">Best Seller</h3>
                  </div>
                  <p className="text-sm opacity-90">International favorite across premium markets</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-card rounded-r-xl">
                <p className="text-lg italic text-muted-foreground">
                  "Made with the same care and dedication that our family has applied for over 200 years"
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section id="quality" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quality & Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every product bearing the Mikel's name represents our unwavering dedication to quality, authenticity, and health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <IconFeature 
              icon={Leaf} 
              title="VEGAN FOOD" 
              description="100% plant-based products suitable for vegan diets"
            />
            <IconFeature 
              icon={Dna} 
              title="GMO FREE" 
              description="No genetically modified organisms in our products"
            />
            <IconFeature 
              icon={Heart} 
              title="HEALTHY FOOD" 
              description="Minimal processing for maximum nutritional benefits"
            />
          </div>

          <Card className="bg-primary text-primary-foreground mb-12">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                Minimal Industrial Processing
              </h3>
              <p className="text-lg mb-8 opacity-90">
                We are committed to minimizing industrial processing in each of our products to deliver fresh and healthy offerings, just as we have been doing since 1819. From field to table, we maintain strict quality control processes ensuring authentic Mediterranean taste and nutritional benefits.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Quality Commitment</h4>
                    <p className="text-sm opacity-90">Full compliance with international food safety regulations and import requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Certified Excellence</h4>
                    <p className="text-sm opacity-90">Our certifications reflect our commitment to meeting the highest international standards</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Awards & Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-xl border-2 border-accent">
                <Award size={48} className="text-accent mx-auto mb-3" />
                <p className="font-semibold text-sm">World's Best Olive Oils 2022</p>
                <p className="text-xs text-muted-foreground">Gold Award</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-accent">
                <Award size={48} className="text-accent mx-auto mb-3" />
                <p className="font-semibold text-sm">World's Best Olive Oils 2024</p>
                <p className="text-xs text-muted-foreground">Gold Award</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-accent">
                <Award size={48} className="text-accent mx-auto mb-3" />
                <p className="font-semibold text-sm">Olive Japan 2025</p>
                <p className="text-xs text-muted-foreground">Gold Medal</p>
              </div>
              <div className="bg-background p-6 rounded-xl border-2 border-accent">
                <Leaf size={48} className="text-accent mx-auto mb-3" />
                <p className="font-semibold text-sm">Eco Garden Certificate</p>
                <p className="text-xs text-muted-foreground">1 of 3 in Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Chain Excellence */}
      <section id="supply-chain" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Global Supply Chain Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Efficient logistics and reliable partnerships serving markets across Asia, Europe, and Americas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <IconFeature 
              icon={Truck} 
              title="International Logistics" 
              description="Efficient shipping and distribution network serving markets across Asia, Europe, and Americas"
            />
            <IconFeature 
              icon={Shield} 
              title="Quality Standards" 
              description="Full compliance with international food safety regulations and import requirements"
            />
            <IconFeature 
              icon={Headphones} 
              title="Reliable Partnership" 
              description="Consistent supply, on-time delivery, and dedicated customer support for every market"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Export Capabilities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Ship size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">Container Shipping</h4>
                      <p className="text-xs opacity-90">Full and partial container loads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Thermometer size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">Cold Chain</h4>
                      <p className="text-xs opacity-90">Temperature-controlled logistics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">Documentation</h4>
                      <p className="text-xs opacity-90">Complete export paperwork</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">Custom Orders</h4>
                      <p className="text-xs opacity-90">Tailored solutions for your market</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-6xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>15+</div>
                    <div className="text-xl font-semibold">Countries Served</div>
                  </div>
                  <div className="h-px bg-accent-foreground/20 w-1/2 mx-auto" />
                  <div>
                    <div className="text-6xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>100%</div>
                    <div className="text-xl font-semibold">Quality Commitment</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner with Farms Planet */}
      <section id="partnership" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Strategic Partner for Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <IconFeature 
              icon={Star} 
              title="Unique Products" 
              description="World's only Paraguayo in syrup"
            />
            <IconFeature 
              icon={Shield} 
              title="Quality Assured" 
              description="Certified premium products"
            />
            <IconFeature 
              icon={Clock} 
              title="200+ Years" 
              description="Proven tradition since 1819"
            />
            <IconFeature 
              icon={Headphones} 
              title="Full Support" 
              description="Dedicated customer service"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Let's Build a Successful Partnership
                </h3>
                <p className="text-lg opacity-90">
                  Farms Planet is committed to supporting your success in the Korean market and beyond with authentic Spanish products, reliable supply, and exceptional service.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 flex flex-col justify-center h-full text-center">
                <h3 className="text-4xl font-bold mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                  FARMS PLANET
                </h3>
                <div className="h-1 w-20 bg-accent mx-auto mb-4" />
                <p className="text-lg">Premium Spanish Food Products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to partner with us? Get in touch with our sales team
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Person *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <Input 
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Interest</label>
                    <Input 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      placeholder="e.g., Paraguayo, Olive Oil"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    id="catalog"
                    checked={formData.requestCatalog}
                    onChange={(e) => setFormData({...formData, requestCatalog: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <label htmlFor="catalog" className="text-sm">Request product catalog</label>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-lg mb-4 text-center">Direct Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-semibold">CEO: Jordi Giró</p>
                    <a href="mailto:jordi@farmsplanet.es" className="text-accent hover:underline">
                      jordi@farmsplanet.es
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Sales: Iván Pérez</p>
                    <a href="mailto:sales@farmsplanet.es" className="text-accent hover:underline">
                      sales@farmsplanet.es
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
