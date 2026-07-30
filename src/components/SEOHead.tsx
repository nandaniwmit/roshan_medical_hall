import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: object[];
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "Roshan Medical Hall, Pharmacy Gaya, Medical Store ANMMCH Gaya, Genuine Medicines Nagmatia Colony, Chemist near Magadh Medical College, Emergency Medicine Gaya, Surgical Supplies Gaya",
  canonicalUrl = "https://roshanmedicalhall.com",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
  schemaData = []
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Roshan Medical Hall - Gaya, Bihar`;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Roshan Medical Hall');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large');

    // Open Graph
    setMetaTag('property', 'og:title', `${title} | Roshan Medical Hall`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'Roshan Medical Hall');
    setMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // Inject JSON-LD Schema
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"].dynamic-seo');
    existingSchemas.forEach((script) => script.remove());

    schemaData.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'dynamic-seo';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schemaData]);

  return null;
};
