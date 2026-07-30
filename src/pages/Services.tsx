import React from 'react';
import {
  Pill,
  ShieldAlert,
  Activity,
  Stethoscope,
  Heart,
  Zap,
  MessageSquare,
  CheckCircle2,
  Phone,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCAL_PHARMACY_SCHEMA, getBreadcrumbSchema } from '../utils/schema';
import { SERVICES_DATA } from '../data/servicesData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { PHONE_NUMBER, generateQuickWhatsAppLink } from '../utils/whatsapp';

interface ServicesProps {
  onOpenWhatsAppModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', item: 'https://roshanmedicalhall.com' },
    { name: 'Services & Products', item: 'https://roshanmedicalhall.com/services' }
  ]);

  const handleServiceInquiry = (serviceTitle: string) => {
    const text = `Hello Roshan Medical Hall, I am inquiring about your service category: *${serviceTitle}*. Please share available products & prices at ANMMCH Medical More store.`;
    window.open(generateQuickWhatsAppLink(text), '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      <SEOHead
        title="Pharmacy Services & Medicine Categories | Roshan Medical Hall Gaya"
        description="Explore complete pharmacy services: Prescription medicines, OTC healthcare, digital BP monitors, pulse oximeters, surgical dressings, baby care, and supplements at Roshan Medical Hall."
        schemaData={[LOCAL_PHARMACY_SCHEMA, breadcrumb]}
      />

      {/* Services Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Pharmacy Products & Healthcare Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Complete Medical & Surgical <span className="text-[#0A8F6A]">Inventory</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From chronic care prescription drugs to digital monitors and surgical disposables, explore our complete offerings available at ANMMCH Medical More, Gaya.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: FULL MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker compact={false} />
      </section>

      {/* CATEGORY-WISE PHARMACY SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            Detailed Service Categories
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
            What We Supply at Roshan Medical Hall
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Click any service category to order or inquire stock directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-7 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F7F6] dark:bg-slate-800 text-[#0A8F6A] flex items-center justify-center font-bold group-hover:bg-[#0A8F6A] group-hover:text-white transition-colors">
                    <Pill className="w-6 h-6" />
                  </div>
                  {service.badge && (
                    <span className="bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Available Items Include:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{service.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK ORDER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Can't Find Your Prescribed Medicine in the List?
          </h2>
          <p className="text-slate-200 text-sm max-w-xl mx-auto">
            We store thousands of specialized surgical, cardiac, neurological, and pediatric drugs at our store opposite ANMMCH Gate. Send us a quick WhatsApp photo of your prescription!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenWhatsAppModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-2xl shadow-xl text-sm cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 fill-current" />
              <span>Upload Prescription on WhatsApp</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-950/80 text-white border border-emerald-700 font-semibold px-8 py-3.5 rounded-2xl text-sm"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call Pharmacist Directly</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
