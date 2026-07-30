import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Menu,
  X,
  Moon,
  Sun,
  Pill,
  Search,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PHONE_NUMBER, WHATSAPP_NUMBER, generateQuickWhatsAppLink } from '../utils/whatsapp';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors">
      {/* Top Info Bar */}
      <div className="bg-emerald-800 dark:bg-emerald-950 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>Call: <strong className="font-semibold">{PHONE_NUMBER}</strong></span>
            </a>
            <span className="hidden md:inline text-emerald-400">•</span>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-100">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="truncate max-w-xs md:max-w-none">
                ANMMCH MEDICAL MORE, Nagmatia Colony, Gaya, Bihar 823001
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-emerald-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Mon-Sat: 7:30 AM - 10:30 PM | Sun: 8 AM - 9 PM</span>
            </div>
            <span className="bg-emerald-600 dark:bg-emerald-800 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse">
              24/7 Emergency Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
            <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-md shadow-emerald-100 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Pill className="w-5 h-5 rotate-45" />
                <ShieldCheck className="w-3 h-3 text-emerald-200 absolute -bottom-1 -right-1" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans leading-none">
                  ROSHAN <span className="text-[#0A8F6A]">MEDICAL HALL</span>
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#0A8F6A] font-semibold mt-0.5">
                Gaya, Bihar
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all py-1 ${
                    isActive
                      ? 'text-[#0A8F6A] border-b-2 border-[#0A8F6A] font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-semibold text-sm px-5 py-2 rounded-full shadow-md shadow-emerald-100 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Call Store */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold text-sm px-4 py-2 rounded-full transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Call Store</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenWhatsAppModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-sm text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Order</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium py-3 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
