import React, { useState } from 'react';
import { ZoomIn, Filter, MapPin, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCAL_PHARMACY_SCHEMA, getBreadcrumbSchema } from '../utils/schema';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { LightboxModal } from '../components/LightboxModal';
import { generateQuickWhatsAppLink } from '../utils/whatsapp';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', item: 'https://roshanmedicalhall.com' },
    { name: 'Gallery', item: 'https://roshanmedicalhall.com/gallery' }
  ]);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Storefront & Interior' },
    { id: 'shelves', label: 'Medicine Shelves & Cold Chain' },
    { id: 'products', label: 'Healthcare & Baby Products' },
    { id: 'equipment', label: 'Equipment & Monitors' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12 pb-16">
      <SEOHead
        title="Store Photo Gallery | Roshan Medical Hall - Gaya, Bihar"
        description="View photo gallery of Roshan Medical Hall storefront at ANMMCH Medical More, organized medicine racks, temperature-monitored cold chain storage, and digital monitors."
        schemaData={[LOCAL_PHARMACY_SCHEMA, breadcrumb]}
      />

      {/* Gallery Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden rounded-[2.5rem] max-w-7xl mx-auto border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#0A8F6A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A8F6A] bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Store Visual Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pharmacy Photo <span className="text-[#0A8F6A]">Gallery</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a visual tour of our modern medical store, cold storage refrigeration facilities, and extensive healthcare inventory located at ANMMCH Medical More, Gaya.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-lg shadow-emerald-600/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white p-4 text-center">
                  <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-8 h-8 mx-auto text-emerald-400" />
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Click to Enlarge
                    </p>
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

    </div>
  );
};
