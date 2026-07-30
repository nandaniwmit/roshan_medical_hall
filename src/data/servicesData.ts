export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
  ctaText: string;
  badge?: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines & Allopathy",
    description: "100% genuine prescription medications sourced directly from WHO-GMP certified pharmaceutical manufacturers like Mankind, Sun Pharma, Cipla, GSK, and Alkem.",
    iconName: "Pill",
    items: [
      "Antibiotics & Anti-infectives",
      "Cardiac & Antihypertensive Drugs",
      "Diabetes & Thyroid Care",
      "Gastrointestinal & Ulcer Care",
      "Neuro & Psychiatric Medicines",
      "Oncology & Specialty Medicines"
    ],
    ctaText: "Order Prescription Medicines",
    badge: "100% Genuine Guaranteed"
  },
  {
    id: "otc-healthcare",
    title: "OTC Medicines & Daily Healthcare",
    description: "Over-the-counter wellness essentials, pain relief, cough & cold syrups, acidity remedies, and daily first-aid supplies available without hassle.",
    iconName: "ShieldAlert",
    items: [
      "Fever & Analgesics (Paracetamol / Dolo)",
      "Cough, Cold & Antiallergic Syrups",
      "Antacids & Digestive Enzymes",
      "Pain Relief Sprays & Ointments",
      "First Aid Antiseptics & Bandages",
      "Oral Rehydration (ORS & Electrolytes)"
    ],
    ctaText: "Inquire OTC Items",
    badge: "Immediate Availability"
  },
  {
    id: "medical-devices",
    title: "Health Monitors & Medical Devices",
    description: "Accurate home health monitoring instruments from trusted healthcare brands like Omron, Accu-Chek, and Dr. Trust with warranty guidance.",
    iconName: "Activity",
    items: [
      "Digital Blood Pressure Monitors",
      "Glucometers & Blood Glucose Strips",
      "Fingertip Pulse Oximeters",
      "Compressor & Ultrasonic Nebulizers",
      "Digital Infrared Thermometers",
      "Vaporizers & Steam Inhalers"
    ],
    ctaText: "Check Device Stock",
    badge: "Tested & Certified"
  },
  {
    id: "surgical-supplies",
    title: "Surgical & Wound Care Essentials",
    description: "Hospital-grade sterile surgical dressings, bandaging kits, disposable syringes, and post-operative home care accessories near ANMMCH hospital.",
    iconName: "Stethoscope",
    items: [
      "Sterile Cotton & Gauze Swabs",
      "Crepe Bandages & Micropore Tapes",
      "Surgical Gloves & Disposables",
      "IV Sets & Syringes (Needles)",
      "Betadine & Wound Disinfectants",
      "Catheters & Urine Bags"
    ],
    ctaText: "Get Surgical Quotes",
    badge: "Hospital Grade"
  },
  {
    id: "baby-mother-care",
    title: "Baby Care & Mother Healthcare",
    description: "Safe baby nutrition powders, infant formula, ultra-soft diapers, mother care creams, and pediatric wellness products.",
    iconName: "Heart",
    items: [
      "Infant Formula (Lactogen, Nan Pro, Similac)",
      "Baby Diapers & Rash Protection Creams",
      "Baby Skincare & Massage Oils",
      "Maternal & Lactation Supplements",
      "Pediatric Electrolytes & Drops",
      "Baby Feeders & Sterilizer Kits"
    ],
    ctaText: "Order Baby Care Products",
    badge: "Gentle & Tested"
  },
  {
    id: "supplements-ortho",
    title: "Supplements, Vitamins & Ortho Care",
    description: "Daily immunity boosters, multivitamins, calcium & D3 supplements, along with orthopedic support belts and knee caps.",
    iconName: "Zap",
    items: [
      "Multivitamin & Mineral Capsules",
      "Calcium & Vitamin D3 Tablets",
      "Protein Supplements & Powders",
      "Knee Support & Lumbar Sacral Belts",
      "Heating Pads & Gel Packs",
      "Orthopedic Walkers & Walking Sticks"
    ],
    ctaText: "Explore Supplements & Belts",
    badge: "Wellness Essentials"
  }
];
