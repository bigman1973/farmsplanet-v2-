import { APP_LOGO } from "@/const";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={APP_LOGO} alt="Farms Planet" className="h-16 w-auto" />
            <p className="text-sm opacity-90">
              Premium Spanish Food Products
            </p>
            <p className="text-xs opacity-75">
              Your trusted partner for authentic Mediterranean excellence
            </p>
            <div className="flex items-center gap-2 text-accent">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>200+</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold">Years of Tradition</div>
                <div className="opacity-75">Since 1819</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">Products</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-accent transition-colors">Quality & Certifications</a>
              </li>
              <li>
                <a href="#supply-chain" className="hover:text-accent transition-colors">Supply Chain</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-accent transition-colors">Partnership</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Premium Olive Oil</li>
              <li className="opacity-90">Paraguayo (Flat Peach)</li>
              <li className="opacity-90">Stone Fruits</li>
              <li className="opacity-90">Fruit Preserves</li>
              <li className="opacity-90">Natural Juices</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">CEO: Jordi Giró</div>
                  <a href="mailto:jordi@farmsplanet.es" className="hover:text-accent transition-colors">
                    jordi@farmsplanet.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">Sales: Iván Pérez</div>
                  <a href="mailto:sales@farmsplanet.es" className="hover:text-accent transition-colors">
                    sales@farmsplanet.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div className="opacity-90">
                  Alcarràs, Catalonia, Spain<br />
                  Europe's Leading Stone Fruits Region
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Farms Planet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
