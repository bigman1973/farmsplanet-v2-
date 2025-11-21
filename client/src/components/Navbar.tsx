import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={APP_LOGO} alt="Farms Planet" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                FARMS PLANET
              </div>
              <div className="text-xs text-muted-foreground">Premium Spanish Food</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("quality")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Quality
            </button>
            <button
              onClick={() => scrollToSection("supply-chain")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Supply Chain
            </button>
            <button
              onClick={() => scrollToSection("partnership")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Partnership
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("quality")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Quality
              </button>
              <button
                onClick={() => scrollToSection("supply-chain")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Supply Chain
              </button>
              <button
                onClick={() => scrollToSection("partnership")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Partnership
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
