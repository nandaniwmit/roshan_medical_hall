import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Navigation,
  ShieldCheck,
  Award,
  Clock,
  HeartPulse,
  Pill,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
  MapPin,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Send,
  Zap,
  Activity,
  ShieldAlert,
  Stethoscope
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCAL_PHARMACY_SCHEMA, FAQ_PAGE_SCHEMA } from '../utils/schema';
import { PHONE_NUMBER, generateDirectionsLink, generateQuickWhatsAppLink } from '../utils/whatsapp';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQ_ITEMS, CUSTOMER_REVIEWS } from '../data/faqData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      <SEOHead
        title="Roshan Medical Hall | Trusted Pharmacy in Gaya, Bihar"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care & health monitors at ANMMCH Medical More, Nagmatia Colony, Gaya."
        schemaData={[LOCAL_PHARMACY_SCHEMA, FAQ_PAGE_SCHEMA]}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-12 sm:py-24 rounded-[2.5rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-sm border border-slate-800">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-emerald-950 text-[#0A8F6A] border border-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
                Open 24/7 • Gaya, Bihar
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Genuine Medicines <span className="text-[#0A8F6A]">& Professional Care</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Providing genuine medicines, healthcare products, surgical supplies, and daily essentials at affordable prices in Gaya since 2010.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A8F6A] text-white hover:bg-[#087a5a] font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all active:scale-95 text-base"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={onOpenWhatsAppModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all active:scale-95 text-base cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-[#0A8F6A] fill-current" />
                  <span>Order on WhatsApp</span>
                </button>

                <a
                  href={generateDirectionsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white font-bold px-8 py-3.5 rounded-2xl border border-slate-700 transition-all text-base"
                >
                  <Navigation className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Location Tag */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span>ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001</span>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[2.5rem] bg-slate-800/90 border border-slate-700 p-3 shadow-2xl backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80"
                  alt="Roshan Medical Hall Front Counter Gaya"
                  className="w-full h-72 sm:h-80 object-cover rounded-[2rem]"
                />

                {/* Floating Badge on Card */}
                <div className="absolute -bottom-5 -left-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Licensed Pharmacist</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">100% Quality Certified</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#0A8F6A] text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Open Mon-Sat 7:30 AM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-50 dark:bg-emerald-950 px-3.5 py-1 rounded-full">
                About Roshan Medical Hall
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Serving Gaya & ANMMCH Hospital Patients with Uncompromising Care
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located conveniently at ANMMCH Medical More in Nagmatia Colony, Roshan Medical Hall has earned the unshakeable trust of thousands of local families, doctors, and hospital visitors. We carry a comprehensive range of genuine pharmaceutical drugs, life-saving cold chain insulins, baby healthcare essentials, and surgical supplies.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Cold Chain Refrigeration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>WHO-GMP Certified Drugs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Express WhatsApp Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                  <span>Opposite ANMMCH Hospital Gate</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#0A8F6A] font-bold hover:underline text-sm group"
                >
                  <span>Read Our Complete Business Story & Mission</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#F4F7F6] dark:bg-slate-800/80 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center shadow-sm hover:border-emerald-200 transition-colors">
                <span className="block text-3xl font-extrabold text-[#0A8F6A]">10,000+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Medicines in Stock</span>
              </div>
              <div className="bg-[#F4F7F6] dark:bg-slate-800/80 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center shadow-sm hover:border-emerald-200 transition-colors">
                <span className="block text-3xl font-extrabold text-[#0A8F6A]">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Genuine Quality</span>
              </div>
              <div className="bg-[#F4F7F6] dark:bg-slate-800/80 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center shadow-sm hover:border-emerald-200 transition-colors">
                <span className="block text-3xl font-extrabold text-[#0A8F6A]">12+ Yrs</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Community Trust</span>
              </div>
              <div className="bg-[#F4F7F6] dark:bg-slate-800/80 p-5 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col justify-center items-center text-center shadow-sm hover:border-emerald-200 transition-colors">
                <span className="block text-3xl font-extrabold text-[#0A8F6A]">4.9 ★</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Patient Reviews</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEDICINE STOCK CHECKER PREVIEW (EXCLUSIVE FEATURE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker compact={true} />
        <div className="mt-4 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>View Full Medicine Catalog & Category Filters</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED SERVICES PREVIEW (Max 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Our Healthcare Services
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
            Comprehensive Pharmacy & Healthcare Solutions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Everything you need for your family's health under one trusted roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Pill className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  {service.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 pt-3 border-t border-slate-100 dark:border-slate-800"
              >
                <span>Learn More Category Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition-colors"
          >
            <span>Explore All Pharmacy Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              The Roshan Medical Promise
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We prioritize patient health, absolute drug authenticity, and fast local service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct procurement from authorized pharmaceutical companies with batch certification and clear manufacturing & expiry dates.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">24/7 Emergency Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Immediate call assistance for emergency doctor prescriptions near ANMMCH Medical College Hospital.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">WhatsApp Order & Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Simply send a photo of your doctor's prescription to 07992461363 for quick price check and express store pickup.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Cold Chain System</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated temperature-controlled storage with 24/7 power backup for Insulin, Injections, and Vaccines.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Affordable Fair Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent discounts on chronic care medicines, digital BP monitors, glucometers, and surgical items.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Expert Pharmacist Guidance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Courteous licensed pharmacists ready to explain proper dosage, precautions, and dietary tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Patient Feedback
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
            What Our Customers Say
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Real experiences from patients and families visiting ANMMCH Medical More, Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "{review.comment}"
              </p>
              <div className="pt-2 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">{review.author}</span>
                  <span className="text-slate-400">{review.location}</span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-md text-[10px]">
                  Verified Local Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
            Common Pharmacy Queries
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs space-y-2"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-7 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Have more questions? Visit our Contact Page</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700">
              Healthcare Advice
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-3">
              Pharmacist's Daily Health Tips
            </h2>
            <p className="text-sm text-emerald-100 mt-2">
              Essential tips for managing medications, cold chain insulins, and daily wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-base mb-1">Storing Insulin at Home</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Unopened insulin pens should be kept in the main refrigerator compartment (2-8°C). Never freeze insulin or leave it in direct sunlight.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-base mb-1">Checking BP Accurately</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Rest quietly for 5 minutes before taking blood pressure. Keep arm supported at heart level for precise digital monitor readings.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-base mb-1">Completing Antibiotic Courses</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Always finish the complete doctor-prescribed antibiotic dose even if fever subsides, to prevent bacterial antibiotic resistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border border-slate-800">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Need Medicines Urgently at ANMMCH Medical More?
            </h2>
            <p className="text-sm text-slate-300">
              Call us directly or send your prescription on WhatsApp. We keep your medicine parcel ready in minutes!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWhatsAppModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 text-base cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Prescription Order</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-4 rounded-2xl text-base"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call Pharmacy Store ({PHONE_NUMBER})</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
