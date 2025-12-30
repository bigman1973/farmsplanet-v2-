import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = "/images/logo.svg", 
  url = "https://farmsplanet.com" 
}: SEOProps) {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  // Default values if not provided
  const siteTitle = title || t('hero.tagline');
  const siteDescription = description || t('hero.subtitle');
  const fullTitle = `${siteTitle} | Farms Planet`;

  // Schema.org Organization data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Farms Planet",
    "url": url,
    "logo": `${url}${image}`,
    "foundingDate": "1819",
    "description": "Premium Spanish Food Products since 1819",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Alcarràs",
      "addressRegion": "Catalonia",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://www.instagram.com/farmsplanet",
      "https://www.linkedin.com/company/farmsplanet"
    ]
  };

  // Schema.org Product data (example for Paraguayo)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Paraguayo in Light Syrup",
    "image": `${url}/images/paraguayo-jar.jpg`,
    "description": "The only Paraguayo in syrup in the world. Handcrafted in Alcarràs.",
    "brand": {
      "@type": "Brand",
      "name": "Mikel's"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={currentLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={`${url}/${currentLang}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:locale" content={currentLang} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={`${url}${image}`} />

      {/* Hreflang Tags for International SEO */}
      <link rel="alternate" href={`${url}/en`} hrefLang="en" />
      <link rel="alternate" href={`${url}/es`} hrefLang="es" />
      <link rel="alternate" href={`${url}/fr`} hrefLang="fr" />
      <link rel="alternate" href={`${url}/ja`} hrefLang="ja" />
      <link rel="alternate" href={`${url}/ko`} hrefLang="ko" />
      <link rel="alternate" href={`${url}/zh`} hrefLang="zh" />
      <link rel="alternate" href={`${url}/ar`} hrefLang="ar" />
      <link rel="alternate" href={`${url}/en`} hrefLang="x-default" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
}
