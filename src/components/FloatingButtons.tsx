import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Navigation } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, generateQuickWhatsAppLink, generateDirectionsLink } from '../utils/whatsapp';

interface FloatingButtonsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Column (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="pointer-events-auto w-12 h-12 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all group border border-slate-700"
          aria-label="Call Store"
          title="Call Roshan Medical Hall"
        >
          <Phone className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppModal}
          className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#0A8F6A] text-white shadow-2xl shadow-emerald-600/40 flex items-center justify-center hover:bg-[#087a5a] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          aria-label="Order on WhatsApp"
          title="Send Medicine Order on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-ping" />
          <MessageSquare className="w-7 h-7 fill-current" />
        </button>
      </div>

      {/* Mobile Sticky Quick CTA Footer Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-3 py-2 grid grid-cols-3 gap-2 shadow-2xl">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold text-[11px]"
        >
          <Phone className="w-4 h-4 text-[#0A8F6A] mb-0.5" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenWhatsAppModal}
          className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-[#0A8F6A] text-white font-bold text-[11px] shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-current mb-0.5" />
          <span>WhatsApp</span>
        </button>

        <a
          href={generateDirectionsLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-teal-800 text-white font-bold text-[11px]"
        >
          <Navigation className="w-4 h-4 text-emerald-300 mb-0.5" />
          <span>Directions</span>
        </a>
      </div>
    </>
  );
};
