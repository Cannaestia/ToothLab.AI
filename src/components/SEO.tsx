import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export default function SEO({
  title = 'ToothLab.Ai - AI-Powered Dental Lab Services | Premium Digital Dentistry',
  description = 'Transform your dental practice with ToothLab.Ai premium digital lab services. Fast turnaround, expert designers, AI-powered workflow. Crowns, bridges, dentures & more.',
  keywords = 'dental lab, digital dentistry, dental crowns, dental bridges, CAD/CAM, dental design, AI dental lab, intraoral scanning, dental restoration, same day crowns, dental laboratory services',
  ogImage = 'https://toothlab.ai/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:type', ogType, true);
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Robots meta tag
    if (noIndex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, noIndex, structuredData]);

  return null;
}

// Predefined structured data for common pages
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'ToothLab.Ai',
  description: 'AI-powered dental laboratory services providing premium digital dentistry solutions',
  url: 'https://toothlab.ai',
  logo: 'https://toothlab.ai/logo.png',
  image: 'https://toothlab.ai/og-image.jpg',
  telephone: '+1-XXX-XXX-XXXX',
  email: 'contact@toothlab.ai',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  priceRange: '$$',
  sameAs: [
    'https://facebook.com/toothlab.ai',
    'https://twitter.com/toothlab.ai',
    'https://linkedin.com/company/toothlab.ai',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Lab Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Crown Design',
          description: 'AI-powered digital crown design services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bridge Design',
          description: 'Custom dental bridge design and fabrication',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Denture Design',
          description: 'Full and partial denture design services',
        },
      },
    ],
  },
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
