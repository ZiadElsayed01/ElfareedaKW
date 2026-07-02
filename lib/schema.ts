import { business, faqs } from "./business";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: business.name,
    image: `${business.domain}/og-image.jpg`,
    "@id": business.domain,
    url: business.domain,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "الفروانية",
      addressCountry: "KW",
    },
    areaServed: business.areaServed.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHours: "Mo-Su 08:00-23:00",
    sameAs: [],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    provider: {
      "@type": "MovingCompany",
      name: business.name,
    },
    areaServed: business.areaServed.map((a) => ({
      "@type": "City",
      name: a,
    })),
  };
}
