import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StatBox, ProductCard, IconFeature, TimelineItem } from "@/components/ReusableComponents";
import { MapView } from "@/components/Map";
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
  Settings,
  ShoppingCart,
  Globe,
  CreditCard,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
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
    toast.success(t('contact.successMessage'));
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
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="inline-flex items-center gap-3 bg-accent/90 text-accent-foreground px-6 py-3 rounded-full mb-8">
            <Clock size={24} />
            <span className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{t('hero.tradition')}</span>
            <span className="text-sm opacity-90">{t('hero.since')}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t('hero.viewCatalog')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t('hero.requestInfo')}
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
            <StatBox number="200+" label={t('stats.years')} sublabel={t('stats.since1819')} />
            <StatBox number="15+" label={t('stats.countries')} sublabel={t('stats.focusAsia')} />
            <StatBox number="100%" label={t('stats.quality')} sublabel={t('stats.certified')} />
            <StatBox number="400" label={t('stats.hectares')} sublabel={t('stats.production')} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/olive-groves.jpg" 
                alt="Olive Grove" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-8">
              <TimelineItem 
                year="1819" 
                title={t('about.foundation')}
                description={t('about.foundationDesc')}
              />
              <TimelineItem 
                year="1920" 
                title={t('about.tradition')}
                description={t('about.traditionDesc')}
              />
              <TimelineItem 
                year="2024" 
                title={t('about.recognition')}
                description={t('about.recognitionDesc')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('about.alcarras')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.alcarrasDesc')}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Leaf size={20} />
                  <span>{t('about.europeLeading')}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('about.cordoba')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('about.cordobaDesc')}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Award size={20} />
                  <span>{t('about.goldAward')}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section - Solo productos reales de mikels.es */}
      <section id="products" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('products.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image="/paraguayo-product.webp"
              title={t('products.paraguayo.title')}
              description={t('products.paraguayo.description')}
              badge={t('products.paraguayo.badge')}
            />
            <ProductCard 
              image="/olive-oil-product.webp"
              title={t('products.oliveOil.title')}
              description={t('products.oliveOil.description')}
              badge={t('products.oliveOil.badge')}
            />
            <ProductCard 
              image="/temprano-oil-product.webp"
              title={t('products.temprano.title')}
              description={t('products.temprano.description')}
              badge={t('products.temprano.badge')}
            />
            <ProductCard 
              image="/nectarina-product.webp"
              title={t('products.nectarina.title')}
              description={t('products.nectarina.description')}
              badge={t('products.nectarina.badge')}
            />
          </div>
          
          <div className="mt-16 bg-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('products.bulkTitle')}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              {t('products.bulkDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                <CheckCircle size={20} />
                <span>{t('products.containerLoads')}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                <CheckCircle size={20} />
                <span>{t('products.customPackaging')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paraguayo Signature Product */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/paraguayo-product.webp" 
                alt="Paraguayo Product" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold mb-4">
                ⭐ {t('signature.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t('signature.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('signature.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Award size={24} className="text-accent" />
                    <h3 className="font-bold text-lg">{t('signature.handcrafted')}</h3>
                  </div>
                  <p className="text-sm opacity-90">{t('signature.handcraftedDesc')}</p>
                </div>
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Star size={24} className="text-accent" />
                    <h3 className="font-bold text-lg">{t('signature.bestSeller')}</h3>
                  </div>
                  <p className="text-sm opacity-90">{t('signature.bestSellerDesc')}</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-secondary pl-6 py-4 bg-card rounded-r-xl">
                <p className="text-lg italic text-muted-foreground">
                  "{t('signature.quote')}"
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
              {t('quality.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('quality.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <IconFeature 
              icon={Leaf} 
              title={t('quality.vegan')}
              description={t('quality.veganDesc')}
            />
            <IconFeature 
              icon={Dna} 
              title={t('quality.gmoFree')}
              description={t('quality.gmoFreeDesc')}
            />
            <IconFeature 
              icon={Heart} 
              title={t('quality.healthy')}
              description={t('quality.healthyDesc')}
            />
          </div>

          <Card className="bg-primary text-primary-foreground mb-16">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('quality.processTitle')}
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    {t('quality.processDesc')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
                      {t('quality.qualityCommitment')}
                    </div>
                    <div className="bg-accent/20 text-accent px-4 py-2 rounded-lg font-semibold">
                      {t('quality.ecoGarden')}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-80 mb-2">{t('quality.ecoGardenDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('quality.awardsTitle')}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={32} className="text-accent" />
                </div>
                <p className="font-semibold">{t('quality.oliveJapan2022')}</p>
                <p className="text-sm text-muted-foreground">Gold Award</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={32} className="text-accent" />
                </div>
                <p className="font-semibold">{t('quality.oliveJapan2024')}</p>
                <p className="text-sm text-muted-foreground">Gold Award</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-md border-2 border-accent">
                  <img 
                    src="/olive-japan-2025.jpg" 
                    alt="Olive Japan 2025 Gold Medal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-lg">{t('quality.oliveJapan2025')}</p>
                <p className="text-sm text-accent font-bold">Gold Award</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf size={32} className="text-primary" />
                </div>
                <p className="font-semibold">{t('quality.ecoGardenCert')}</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply Chain */}
      <section id="supply-chain" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('supplyChain.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('supplyChain.subtitle')}
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl border-2 border-accent/20">
            <MapView 
              className="h-[500px] w-full"
              initialCenter={{ lat: 30.0, lng: 50.0 }} // Centered to show Europe, Middle East and Asia
              initialZoom={3}
              onMapReady={(map: google.maps.Map) => {
                // HQ Locations
                const hqLocations = [
                  { lat: 41.5667, lng: 0.5167, title: "Mikel's HQ - Alcarràs, Spain" },
                  { lat: 37.8882, lng: -4.7794, title: "Mikel's Olive Groves - Córdoba, Spain" }
                ];

                // Current Markets
                const markets = [
                  { lat: 37.5665, lng: 126.9780, title: "Seoul, South Korea" },
                  { lat: 35.6762, lng: 139.6503, title: "Tokyo, Japan" },
                  { lat: 25.0330, lng: 121.5654, title: "Taipei, Taiwan" }
                ];

                // Expansion Markets
                const expansion = [
                  { lat: 25.2048, lng: 55.2708, title: "Dubai, UAE" },
                  { lat: 48.8566, lng: 2.3522, title: "Paris, France" },
                  { lat: 52.5200, lng: 13.4050, title: "Berlin, Germany" }
                ];

                // Add HQ Markers (Green)
                hqLocations.forEach(loc => {
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: loc.lat, lng: loc.lng },
                    title: loc.title,
                    content: new DOMParser().parseFromString(
                      '<div style="background-color: #3D5F3A; color: white; padding: 8px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14M12 11v10"/></svg></div>',
                      'text/html'
                    ).body.firstChild,
                  });
                });

                // Add Market Markers (Gold)
                markets.forEach(loc => {
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: loc.lat, lng: loc.lng },
                    title: loc.title,
                    content: new DOMParser().parseFromString(
                      '<div style="background-color: #D4A537; color: white; padding: 6px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>',
                      'text/html'
                    ).body.firstChild,
                  });
                });

                // Add Expansion Markers (Terracotta)
                expansion.forEach(loc => {
                  new google.maps.marker.AdvancedMarkerElement({
                    map,
                    position: { lat: loc.lat, lng: loc.lng },
                    title: loc.title,
                    content: new DOMParser().parseFromString(
                      '<div style="background-color: #C85C5C; color: white; padding: 6px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>',
                      'text/html'
                    ).body.firstChild,
                  });
                });
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <IconFeature 
              icon={Truck} 
              title={t('supplyChain.logistics')}
              description={t('supplyChain.logisticsDesc')}
            />
            <IconFeature 
              icon={Shield} 
              title={t('supplyChain.standards')}
              description={t('supplyChain.standardsDesc')}
            />
            <IconFeature 
              icon={Headphones} 
              title={t('supplyChain.partnership')}
              description={t('supplyChain.partnershipDesc')}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('supplyChain.exportTitle')}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Ship size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{t('supplyChain.container')}</h4>
                      <p className="text-xs opacity-90">{t('supplyChain.containerDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Thermometer size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{t('supplyChain.coldChain')}</h4>
                      <p className="text-xs opacity-90">{t('supplyChain.coldChainDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{t('supplyChain.documentation')}</h4>
                      <p className="text-xs opacity-90">{t('supplyChain.documentationDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings size={20} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{t('supplyChain.customOrders')}</h4>
                      <p className="text-xs opacity-90">{t('supplyChain.customOrdersDesc')}</p>
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
                    <div className="text-xl font-semibold">{t('stats.countries')}</div>
                  </div>
                  <div className="h-px bg-accent-foreground/20 w-1/2 mx-auto" />
                  <div>
                    <div className="text-6xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>100%</div>
                    <div className="text-xl font-semibold">{t('stats.quality')}</div>
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
              {t('partnership.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <IconFeature 
              icon={Star} 
              title={t('partnership.uniqueProducts')}
              description={t('partnership.uniqueProductsDesc')}
            />
            <IconFeature 
              icon={Shield} 
              title={t('partnership.qualityAssured')}
              description={t('partnership.qualityAssuredDesc')}
            />
            <IconFeature 
              icon={Clock} 
              title={t('partnership.yearsExperience')}
              description={t('partnership.yearsExperienceDesc')}
            />
            <IconFeature 
              icon={Headphones} 
              title={t('partnership.fullSupport')}
              description={t('partnership.fullSupportDesc')}
            />
            <IconFeature 
              icon={ShoppingCart} 
              title={t('partnership.ecommerce')}
              description={t('partnership.ecommerceDesc')}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('partnership.buildPartnership')}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {t('partnership.partnershipDesc')}
                </p>
                <div className="bg-primary/20 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-xl mb-3">{t('partnership.whiteLabel')}</h4>
                  <p className="opacity-90">
                    {t('partnership.whiteLabelDesc')}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 flex flex-col justify-center h-full text-center">
                <h3 className="text-4xl font-bold mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
                  FARMS PLANET
                </h3>
                <div className="h-1 w-20 bg-accent mx-auto mb-4" />
                <p className="text-lg">{t('footer.tagline')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Partnership Section */}
      <section id="digital" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('digitalPartnership.title')}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('digitalPartnership.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Globe className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">{t('digitalPartnership.feature1')}</h3>
              <p className="opacity-90">{t('digitalPartnership.feature1Desc')}</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <ShoppingCart className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">{t('digitalPartnership.feature2')}</h3>
              <p className="opacity-90">{t('digitalPartnership.feature2Desc')}</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <CreditCard className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">{t('digitalPartnership.feature3')}</h3>
              <p className="opacity-90">{t('digitalPartnership.feature3Desc')}</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent">{t('digitalPartnership.feature4')}</h3>
              <p className="opacity-90">{t('digitalPartnership.feature4Desc')}</p>
            </div>
          </div>

          <Card className="bg-card">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {t('digitalPartnership.exampleTitle')}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t('digitalPartnership.exampleDesc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href="https://mikels.es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        {t('digitalPartnership.visitDemo')}
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {t('digitalPartnership.requestStore')}
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 border-2 border-border overflow-hidden">
                  <div className="aspect-video bg-background rounded overflow-hidden">
                    <img 
                      src="/mikels-screenshot.webp" 
                      alt="mikels.es - Live Demo Store" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-muted-foreground font-medium">mikels.es</p>
                    <p className="text-sm text-muted-foreground">Live Demo Store</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle size={16} />
                {t('contact.bulkPricing')}
              </span>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle size={16} />
                {t('contact.whiteLabelOptions')}
              </span>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle size={16} />
                {t('contact.asiaExpertise')}
              </span>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.companyName')} *</label>
                    <Input 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder={t('contact.companyName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.contactPerson')} *</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder={t('contact.contactPerson')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.email')} *</label>
                    <Input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.phone')}</label>
                    <Input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.country')} *</label>
                    <Input 
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder={t('contact.country')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.productInterest')} *</label>
                    <Input 
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      placeholder={t('contact.productPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.message')} *</label>
                  <Textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder={t('contact.messagePlaceholder')}
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
                  <label htmlFor="catalog" className="text-sm font-medium">{t('contact.requestCatalog')}</label>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  {t('contact.submit')}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-lg mb-4 text-center">{t('contact.directContact')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-semibold">{t('contact.ceo')}: Jordi Giró</p>
                    <a href="mailto:jordi@farmsplanet.es" className="text-accent hover:underline">
                      jordi@farmsplanet.es
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">{t('contact.sales')}: Iván Pérez</p>
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
