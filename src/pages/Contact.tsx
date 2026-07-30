import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  Navigation,
  Mail,
  CheckCircle2,
  Building2,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCAL_PHARMACY_SCHEMA, getBreadcrumbSchema } from '../utils/schema';
import { PHONE_NUMBER, generateDirectionsLink, generateQuickWhatsAppLink } from '../utils/whatsapp';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', item: 'https://roshanmedicalhall.com' },
    { name: 'Contact Us', item: 'https://roshanmedicalhall.com/contact' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }
    const text = `Hello Roshan Medical Hall, Inquiry from website:
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
✉️ Email: ${formData.email}
📋 Subject: ${formData.subject}
📝 Message: ${formData.message}`;

    window.open(generateQuickWhatsAppLink(text), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      <SEOHead
        title="Contact Us & Map Location | Roshan Medical Hall - Gaya, Bihar"
        description="Visit Roshan Medical Hall at ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001. Call 07992461363 or order medicines on WhatsApp."
        schemaData={[LOCAL_PHARMACY_SCHEMA, breadcrumb]}
      />

      {/* Hero Contact Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & <span className="text-[#0A8F6A]">Store Directions</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We are conveniently located directly opposite the Anugrah Narayan Magadh Medical College & Hospital main gate in Nagmatia Colony, Gaya.
          </p>
        </div>
      </section>

      {/* Main Info Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
                Business Details
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Roshan Medical Hall Counter
              </h2>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Store Address</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                    Landmark: Opposite ANMMCH Hospital Entrance
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">Phone & WhatsApp</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Direct Phone: <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-slate-900 dark:text-white hover:underline">{PHONE_NUMBER}</a>
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    WhatsApp Orders: <a href={generateQuickWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">07992461363</a>
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Store Operating Hours</h3>
                  <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                      <span>Monday - Saturday</span>
                      <span className="font-bold text-slate-900 dark:text-white">7:30 AM - 10:30 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Sunday</span>
                      <span className="font-bold text-slate-900 dark:text-white">8:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                    ★ 24/7 Emergency Call Service Available
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold py-3.5 px-4 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                <span>Call Store Now</span>
              </a>

              <a
                href={generateDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send Us a Message or Stock Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill out this quick form. Clicking submit will directly launch a preformatted WhatsApp message to our licensed pharmacist counter.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/80 p-6 rounded-2xl text-center space-y-3 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Inquiry Sent via WhatsApp!</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Our team will reply to your medicine query shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-800 dark:text-emerald-300 underline pt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07992461363"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"
                    >
                      <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                      <option value="Cold Chain Insulin Stock">Cold Chain Insulin Stock</option>
                      <option value="Surgical Supplies Quote">Surgical Supplies Quote</option>
                      <option value="Medical Device Purchase">Medical Device Purchase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Message / Required Items
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your medicine requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Google Maps Location & Directions
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Find Roshan Medical Hall right at Medical More, Nagmatia Colony, Gaya.
            </p>
          </div>

          <a
            href={generateDirectionsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A8F6A] text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm hover:bg-[#087a5a] transition-colors w-fit"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
          <iframe
            title="Roshan Medical Hall Google Map Gaya"
            src="https://maps.google.com/maps?q=ANMMCH+MEDICAL+MORE,+Nagmatia+Colony,+Gaya,+Bihar+823001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
};
