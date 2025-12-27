import { APP_LOGO } from "@/const";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={APP_LOGO} alt="Farms Planet" className="h-16 w-auto" />
            <p className="text-sm opacity-90">
              {t('footer.tagline')}
            </p>
            <p className="text-xs opacity-75">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-accent">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>200+</span>
              </div>
              <div className="text-xs">
                <div className="font-semibold">{t('stats.years')}</div>
                <div className="opacity-75">{t('stats.since1819')}</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">{t('nav.products')}</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-accent transition-colors">{t('nav.quality')}</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-accent transition-colors">{t('nav.partnership')}</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('nav.products')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">{t('products.oliveOil.title')}</li>
              <li className="opacity-90">{t('products.paraguayo.title')}</li>
              <li className="opacity-90">{t('products.temprano.title')}</li>
              <li className="opacity-90">{t('products.nectarina.title')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t('footer.contact')}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">{t('contact.ceo')}: Jordi Giró</div>
                  <a href="mailto:jordi@farmsplanet.es" className="hover:text-accent transition-colors">
                    jordi@farmsplanet.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium">{t('contact.sales')}: Iván Pérez</div>
                  <a href="mailto:sales@farmsplanet.es" className="hover:text-accent transition-colors">
                    sales@farmsplanet.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div className="opacity-90">
                  Alcarràs, Catalonia, Spain<br />
                  {t('about.europeLeading')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Farms Planet. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
