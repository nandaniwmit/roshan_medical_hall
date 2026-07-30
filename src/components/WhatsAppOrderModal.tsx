import React, { useState } from 'react';
import { X, MessageSquare, Phone, FileText, CheckCircle2, AlertCircle, Upload, Send } from 'lucide-react';
import { PHONE_NUMBER, generateWhatsAppLink } from '../utils/whatsapp';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: 'Nagmatia Colony, Gaya',
    medicineRequired: prefilledMedicine,
    prescriptionUploaded: 'Yes' as 'Yes' | 'No',
    preferredTime: 'Immediate / As soon as possible',
    notes: ''
  });

  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.phone || !formData.medicineRequired) {
      alert('Please fill in your Name, Phone Number, and Required Medicines.');
      return;
    }

    const waLink = generateWhatsAppLink({
      customerName: formData.customerName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      medicineRequired: formData.medicineRequired,
      prescriptionUploaded: formData.prescriptionUploaded,
      preferredTime: formData.preferredTime,
      notes: `${formData.notes}${prescriptionFileName ? ` [Attached Prescription: ${prescriptionFileName}]` : ''}`
    });

    window.open(waLink, '_blank');
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFileName(e.target.files[0].name);
      setFormData((prev) => ({ ...prev, prescriptionUploaded: 'Yes' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <MessageSquare className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              WhatsApp Medicine Order
            </h3>
            <p className="text-xs text-[#0A8F6A] font-medium">
              Roshan Medical Hall • Gaya, Bihar
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Customer Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Delivery / Pickup Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Nagmatia Colony, Near ANMMCH Gate, Gaya"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Medicine Required / List <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="List medicine names & quantities (e.g. Dolo 650mg x 1 strip, Pantocid 40mg x 2 strips)"
              value={formData.medicineRequired}
              onChange={(e) => setFormData({ ...formData, medicineRequired: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Prescription Upload File or Photo Trigger */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Doctor's Prescription Photo (Optional)
            </label>
            <div className="flex items-center gap-3">
              <label className="cursor-pointer bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-200 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>Select Prescription File</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-xs text-slate-500 truncate max-w-[200px]">
                {prescriptionFileName || 'No file selected yet'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              You will also be able to directly send the image inside WhatsApp chat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Prescription Available?
              </label>
              <select
                value={formData.prescriptionUploaded}
                onChange={(e) =>
                  setFormData({ ...formData, prescriptionUploaded: e.target.value as 'Yes' | 'No' })
                }
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"
              >
                <option value="Yes">Yes, Doctor Prescription Ready</option>
                <option value="No">No, OTC / Healthcare item</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                Preferred Time
              </label>
              <input
                type="text"
                placeholder="e.g. Immediate / Evening"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
              Additional Notes / Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Please send cold chain ice pack with insulin"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="w-full flex-1 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Send Order via WhatsApp</span>
            </button>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
