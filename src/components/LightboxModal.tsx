import React from 'react';
import { X, ZoomIn, MessageSquare, MapPin } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';
import { generateQuickWhatsAppLink } from '../utils/whatsapp';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const handleInquireImage = () => {
    const text = `Hello Roshan Medical Hall, I am inquiring about product/facility: *${item.title}* seen on your website gallery. Is this available at ANMMCH Medical More store?`;
    window.open(generateQuickWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="md:w-3/5 bg-black flex items-center justify-center p-2 relative group min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.alt}
            className="w-full h-full object-contain max-h-[70vh] rounded-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
            <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
            <span>High Resolution Store Photo</span>
          </div>
        </div>

        {/* Details Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="inline-block bg-emerald-950 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {item.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Roshan Medical Hall, ANMMCH Medical More, Gaya</span>
            </div>

            <button
              onClick={handleInquireImage}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg text-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire This Item on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
