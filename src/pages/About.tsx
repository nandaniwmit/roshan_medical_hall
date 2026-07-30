import React from 'react';
import {
  ShieldCheck,
  Award,
  Heart,
  Target,
  Clock,
  CheckCircle2,
  Users,
  Building2,
  Phone,
  MessageSquare,
  MapPin,
  Pill,
  History,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCAL_PHARMACY_SCHEMA, getBreadcrumbSchema } from '../utils/schema';
import { PHONE_NUMBER } from '../utils/whatsapp';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', item: 'https://roshanmedicalhall.com' },
    { name: 'About Us', item: 'https://roshanmedicalhall.com/about' }
  ]);

  return (
    <div className="space-y-16 pb-16">
      <SEOHead
        title="About Us | Roshan Medical Hall - Pharmacy Gaya"
        description="Learn about Roshan Medical Hall's history, mission, licensed pharmacists, quality control, and cold chain insulin care opposite ANMMCH Medical College, Gaya, Bihar."
        schemaData={[LOCAL_PHARMACY_SCHEMA, breadcrumb]}
      />

      {/* About Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            About Our Pharmacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Dedicated to Providing <span className="text-[#0A8F6A]">Genuine Medicines</span> & Compassionate Care
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Roshan Medical Hall is Gaya's trusted premier medical store located at ANMMCH Medical More, Nagmatia Colony. We bridge the gap between quality healthcare and patient accessibility.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Our Business Story
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              A Legacy of Trust Near Anugrah Narayan Magadh Medical College
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Established with a firm commitment to public health, Roshan Medical Hall was founded to solve a critical issue in Gaya: ensuring patients and hospital visitors have immediate access to 100% authentic, unadulterated medicines at fair prices.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Over the years, our store at ANMMCH Medical More has expanded from a local counter into a comprehensive healthcare hub equipped with specialized cold chain storage for insulins and vaccines, high-demand surgical supplies, daily baby nutrition, and modern health monitoring instruments.
            </p>
            
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border-l-4 border-emerald-600 space-y-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                "Our promise is simple: Never compromise on medicine quality, expiry dates, or batch authenticity."
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                — Chief Pharmacist, Roshan Medical Hall
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
              alt="Pharmacy Shelves Gaya"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
              alt="Medical Monitors Store"
              className="w-full h-64 object-cover rounded-2xl shadow-md mt-6"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
              Foundational Pillars
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver 100% genuine, WHO-GMP certified pharmaceutical drugs and medical supplies to every patient in Gaya with utmost speed, accuracy, and affordability.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most reliable healthcare store and digital prescription support center across Gaya district, recognized for patient empathy and cold chain excellence.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Uncompromising integrity, authentic procurement, professional pharmacist guidance, patient confidentiality, and prompt local support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey & Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
            History & Milestones
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-3">
            Our Growth Timeline
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-emerald-200 dark:before:bg-emerald-900">
          {[
            {
              year: '2012',
              title: 'Store Inception at ANMMCH Medical More',
              desc: 'Started operations with core essential prescription medicines and basic healthcare supplies.'
            },
            {
              year: '2016',
              title: 'Cold Chain Storage Upgrade',
              desc: 'Installed dedicated power-backed refrigeration systems for insulins, vaccines, and biologics.'
            },
            {
              year: '2020',
              title: 'Emergency Medical & Surgical Expansion',
              desc: 'Expanded inventory with hospital-grade surgical items, nebulizers, digital BP monitors, and pulse oximeters.'
            },
            {
              year: '2024',
              title: 'Express WhatsApp Ordering Launch',
              desc: 'Introduced 07992461363 instant WhatsApp prescription service for zero-wait store pickup and local home delivery.'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-center gap-6 group">
              <div className="w-full sm:w-1/2 sm:text-right pr-0 sm:pr-8 space-y-1">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{item.year}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0 z-10">
                <History className="w-4 h-4" />
              </div>
              <div className="w-full sm:w-1/2 pl-0 sm:pl-8 hidden sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Store Overview & Owner Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-800">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Pharmacist Guarantee
            </span>
            <h2 className="text-3xl font-bold">
              Direct Message from Roshan Medical Hall Management
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              "We understand that behind every medicine request is a patient seeking comfort and healing. Whether you need a regular daily hypertension tablet or an urgent post-surgery antibiotic prescription near ANMMCH Hospital, our team guarantees genuine stock, transparent billing, and respectful guidance."
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-emerald-400 font-semibold">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>Nagmatia Colony, Gaya</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span>07992461363</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center">
            <button
              onClick={onOpenWhatsAppModal}
              className="w-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/30 text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Contact Pharmacist Directly</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
