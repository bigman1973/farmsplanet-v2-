import { APP_LOGO } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

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
              <div className="font-bold text-xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                FARMS PLANET
              </div>
              <div className="text-sm text-muted-foreground">Premium Spanish Food</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection("quality")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.quality')}
            </button>
            <button
              onClick={() => scrollToSection("partnership")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.partnership')}
            </button>
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.products')}
              </button>
              <button
                onClick={() => scrollToSection("quality")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.quality')}
              </button>
              <button
                onClick={() => scrollToSection("partnership")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t('nav.partnership')}
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground w-full"
              >
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
