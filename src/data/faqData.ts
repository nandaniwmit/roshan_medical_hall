export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Where is Roshan Medical Hall located in Gaya?",
    answer: "Roshan Medical Hall is located at ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001, right opposite the Anugrah Narayan Magadh Medical College & Hospital entrance.",
    category: "Location"
  },
  {
    question: "Can I order medicines on WhatsApp for quick pickup or delivery?",
    answer: "Yes! You can send us your medicine list or prescription picture on WhatsApp at 07992461363 (+91 7992461363). Our team will verify availability, calculate total cost, and keep your order ready for express pickup or local delivery.",
    category: "Ordering"
  },
  {
    question: "Do you store refrigerated medicines like Insulin and Injections properly?",
    answer: "Absolutely. We maintain a strict cold chain management system with 24/7 power backup and calibrated refrigerators to ensure vaccines, insulins, and temperature-sensitive injections remain effective and potent.",
    category: "Quality"
  },
  {
    question: "Are all medicines 100% genuine and batch-certified?",
    answer: "Yes, 100%. All medicines and surgical supplies at Roshan Medical Hall are directly procured from authorized pharmaceutical distributors and certified manufacturers with valid batch numbers and clear expiry dates.",
    category: "Quality"
  },
  {
    question: "What are your store operating hours?",
    answer: "Our medical store is open Monday through Saturday from 7:30 AM to 10:30 PM, and Sundays from 8:00 AM to 9:00 PM. Emergency call support is available 24/7 for critical prescriptions.",
    category: "Store Hours"
  },
  {
    question: "Is a prescription required to buy medicines?",
    answer: "Prescription (Schedule H & H1) drugs require a valid prescription from a registered doctor. Over-the-counter (OTC) medicines, health supplements, baby care, and healthcare devices can be purchased directly without a prescription.",
    category: "Guidelines"
  }
];

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
  verified: boolean;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "r1",
    author: "Rajesh Kumar Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "Best medical store near Magadh Medical College (ANMMCH). I got all cardiac and diabetes medicines at discounted genuine prices. Staff is polite and fast on WhatsApp ordering.",
    location: "Nagmatia Colony, Gaya",
    verified: true
  },
  {
    id: "r2",
    author: "Pooja Verma",
    rating: 5,
    date: "1 month ago",
    comment: "Very reliable store for baby care products and nebulizers. They always keep cold chain insulins in cold storage with proper ice packs.",
    location: "Gaya City",
    verified: true
  },
  {
    id: "r3",
    author: "Dr. A. K. Sinha",
    rating: 5,
    date: "3 weeks ago",
    comment: "Highly ethical pharmacy. They maintain proper batch records and never sell outdated medicines. Located right near Medical More, very convenient for patients.",
    location: "ANMMCH Gaya",
    verified: true
  },
  {
    id: "r4",
    author: "Sanjay Prasad",
    rating: 5,
    date: "2 months ago",
    comment: "Ordered surgical bandages and glucometer strips via WhatsApp 07992461363. Order was packed within 10 minutes! Excellent service.",
    location: "Manpur, Gaya",
    verified: true
  }
];
