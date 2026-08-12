import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ExternalLink,
  ShieldCheck,
  Pill,
  Heart,
  ChevronRight,
  Globe
} from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, generateDirectionsLink, generateQuickWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  // ======================================================
  // GLOBAL TRACKING HOOK INTEGRATION AS MANDATED BY PROMPT
  // ======================================================
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold">
                <Pill className="w-5 h-5 rotate-45" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">ROSHAN MEDICAL HALL</h3>
                <p className="text-xs text-[#0A8F6A] font-medium">Trusted Healthcare Partner since 2012</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Providing 100% genuine medicines, baby care essentials, surgical supplies, and health monitors at affordable prices opposite ANMMCH Medical College, Gaya.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 text-[#0A8F6A] border border-emerald-800 flex items-center justify-center hover:bg-[#0A8F6A] hover:text-white transition-colors"
                title="WhatsApp Us"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-[#0A8F6A] hover:text-white transition-colors"
                title="Call Pharmacy"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={generateDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-[#0A8F6A] hover:text-white transition-colors"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide border-l-2 border-emerald-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'About Roshan Medical', path: '/about' },
                { name: 'Pharmacy Services', path: '/services' },
                { name: 'Store Photo Gallery', path: '/gallery' },
                { name: 'Contact & Directions', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-2 group text-slate-400"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details & Location */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide border-l-2 border-emerald-500 pl-3">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors font-medium text-slate-200">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={generateQuickWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: 07992461363
                </a>
              </div>
              <a
                href={generateDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-1"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 4: Store Hours & Safety */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-semibold tracking-wide border-l-2 border-emerald-500 pl-3">
              Working Hours
            </h4>
            <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/60 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="font-medium text-slate-200">Monday - Saturday</span>
                <span className="text-emerald-400 font-mono">7:30 AM - 10:30 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="font-medium text-slate-200">Sunday</span>
                <span className="text-emerald-400 font-mono">8:00 AM - 9:00 PM</span>
              </div>
              <div className="pt-1 flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>24/7 Emergency Prescription Call Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> Information provided on this website is for general educational purposes and stock availability inquiries only. It should not replace professional medical advice from a registered medical practitioner. Always consult your doctor before taking prescription medications.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Roshan Medical Hall. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-slate-500">Gaya, Bihar, India</span>
            <span>•</span>
            <p>
              {' '}
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>

            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
