import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, MessageSquare, Pill, Filter, RefreshCw } from 'lucide-react';
import stockData from '../data/medicineStock.json';
import { generateQuickWhatsAppLink } from '../utils/whatsapp';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  status: string;
  expiry: string;
  prescriptionRequired: boolean;
  description: string;
}

interface MedicineStockCheckerProps {
  initialSearchQuery?: string;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  initialSearchQuery = '',
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    stockData.forEach((item) => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (stockData as MedicineItem[]).filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || med.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

      const getStatusBadge = (status: string, qty: number) => {
    if (status === 'Available' || qty > 10) {
      return (
        <span className="inline-flex items-center gap-1 bg-[#0A8F6A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
          <CheckCircle2 className="w-3 h-3 text-white" />
          <span>Available</span>
        </span>
      );
    }
    if (status === 'Limited Stock' || (qty > 0 && qty <= 10)) {
      return (
        <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
          <AlertTriangle className="w-3 h-3 text-white" />
          <span>Limited</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 bg-slate-400 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
        <XCircle className="w-3 h-3 text-white" />
        <span>Out of Stock</span>
      </span>
    );
  };

  const handleOrderWhatsApp = (med: MedicineItem) => {
    const text = `Hello Roshan Medical Hall, I am checking stock for: *${med.name}* (${med.brand}). Is it available right now at ANMMCH Medical More store?`;
    window.open(generateQuickWhatsAppLink(text), '_blank');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 p-6 sm:p-8 transition-all">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Pill className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Instant Stock Checker</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Search className="w-6 h-6 text-[#0A8F6A]" />
            Search Medicine Availability
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Search for medicine availability instantly at Roshan Medical Hall counter.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="text-xs font-semibold text-slate-500 hover:text-[#0A8F6A] dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1 bg-[#F4F7F6] dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Search</span>
          </button>
        </div>
      </div>

      {/* Search Bar & Category Filter */}
      <div className="mt-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter medicine name..."
            className="w-full bg-[#F4F7F6] dark:bg-slate-800/80 text-slate-900 dark:text-white pl-5 pr-12 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-[#0A8F6A] text-sm font-medium placeholder-slate-400 transition-all"
          />
          <button className="absolute right-3 top-3 bg-[#0A8F6A] p-2 rounded-xl text-white hover:bg-[#087a5a] transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filter Pills */}
        {!compact && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          Showing <strong>{filteredMedicines.length}</strong> items in inventory
        </span>
        {selectedCategory !== 'All' && (
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            Category: {selectedCategory}
          </span>
        )}
      </div>

      {/* Stock Cards Grid */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.slice(0, compact ? 6 : 20).map((med) => (
            <div
              key={med.id}
              className="bg-slate-50/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-4.5 rounded-xl transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {med.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Brand: <span className="text-slate-700 dark:text-slate-300 font-semibold">{med.brand}</span>
                    </p>
                  </div>
                  {getStatusBadge(med.status, med.availableQuantity)}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
                  {med.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-slate-400 block">MRP Price</span>
                  <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
                    ₹{med.mrp.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {med.prescriptionRequired && (
                    <span
                      title="Doctor Prescription Required"
                      className="bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md"
                    >
                      Rx Req.
                    </span>
                  )}
                  <button
                    onClick={() => handleOrderWhatsApp(med)}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.8 rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Inquire / Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
            <Pill className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No direct stock match found for "{searchTerm}"
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              Don't worry! We stock over 10,000+ prescription drugs and rare medicines at our physical store at ANMMCH Medical More.
            </p>
            <button
              onClick={() => {
                const text = `Hello Roshan Medical Hall, I am looking for medicine: *${searchTerm}*. Is it available at your store?`;
                window.open(generateQuickWhatsAppLink(text), '_blank');
              }}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Ask Pharmacist on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
