export interface GalleryItem {
  id: string;
  title: string;
  category: "store" | "shelves" | "products" | "equipment";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Roshan Medical Hall Main Storefront",
    category: "store",
    categoryLabel: "Store View",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    description: "Main front counter located at ANMMCH Medical More, Nagmatia Colony, Gaya.",
    alt: "Roshan Medical Hall Front Store View Gaya"
  },
  {
    id: "g2",
    title: "Organized Prescription Medicine Shelves",
    category: "shelves",
    categoryLabel: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    description: "Systematically categorized medicine racks for instant prescription fulfillment.",
    alt: "Pharmacy medicine storage shelves"
  },
  {
    id: "g3",
    title: "Temperature Controlled Cold Chain Storage",
    category: "shelves",
    categoryLabel: "Medicine Shelves",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    description: "Dedicated refrigeration unit maintaining 2-8°C for Insulins, Vaccines & Sera.",
    alt: "Pharmacy cold storage for insulins"
  },
  {
    id: "g4",
    title: "Digital Health Monitors Display",
    category: "equipment",
    categoryLabel: "Equipment & Monitors",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    description: "Range of Omron digital BP apparatus, pulse oximeters, and Accu-Chek glucometers.",
    alt: "Health monitors blood pressure digital monitors"
  },
  {
    id: "g5",
    title: "Baby Care & Infant Nutrition Counter",
    category: "products",
    categoryLabel: "Healthcare Products",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80",
    description: "Genuine infant formula, baby food powders, Pampers, and gentle baby soaps.",
    alt: "Baby care section at pharmacy"
  },
  {
    id: "g6",
    title: "Surgical & Hospital Care Disposables",
    category: "equipment",
    categoryLabel: "Equipment & Monitors",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=80",
    description: "Sterile surgical kits, bandages, IV fluids, and hospital supplies.",
    alt: "Surgical supplies at Roshan Medical Hall"
  },
  {
    id: "g7",
    title: "Customer Consultation Counter",
    category: "store",
    categoryLabel: "Store View",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    description: "Experienced licensed pharmacists advising customers on dosage and storage.",
    alt: "Pharmacist customer desk"
  },
  {
    id: "g8",
    title: "Multivitamins & Immunity Boosters Corner",
    category: "products",
    categoryLabel: "Healthcare Products",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1000&q=80",
    description: "Wide collection of daily wellness supplements, protein powders, and calcium.",
    alt: "Supplements and vitamins shelf"
  }
];
