export const LOCAL_PHARMACY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Roshan Medical Hall",
  "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
  "@id": "https://roshanmedicalhall.com/#pharmacy",
  "url": "https://roshanmedicalhall.com",
  "telephone": "+917992461363",
  "priceRange": "₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ANMMCH MEDICAL MORE, Nagmatia Colony",
    "addressLocality": "Gaya",
    "addressRegion": "Bihar",
    "postalCode": "823001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7964,
    "longitude": 84.9994
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:30",
      "closes": "22:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "21:00"
    }
  ],
  "areaServed": [
    "Nagmatia Colony, Gaya",
    "ANMMCH Hospital, Gaya",
    "Magadh Medical College Area, Gaya",
    "Gaya Town, Bihar"
  ],
  "hasMap": "https://www.google.com/maps/search/?api=1&query=ANMMCH+MEDICAL+MORE,+Nagmatia+Colony,+Gaya,+Bihar+823001",
  "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Paytm, Debit Card, Credit Card",
  "currenciesAccepted": "INR"
};

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": it.item
    }))
  };
}

export const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is Roshan Medical Hall located in Gaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roshan Medical Hall is located at ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001, right opposite Anugrah Narayan Magadh Medical College & Hospital."
      }
    },
    {
      "@type": "Question",
      "name": "How can I order genuine medicines on WhatsApp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can send your prescription or required medicine list via WhatsApp to 07992461363. Our team will verify and prepare your order for instant pickup or local delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Are cold chain insulins and vaccines available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we store insulins, vaccines, and biologics in temperature-monitored refrigerators with 24/7 power backup to preserve potency."
      }
    }
  ]
};
