export interface WhatsAppOrderPayload {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  medicineRequired: string;
  prescriptionUploaded: 'Yes' | 'No';
  preferredTime?: string;
  notes?: string;
}

export const PHONE_NUMBER = "07992461363";
export const WHATSAPP_NUMBER = "917992461363"; // International format for wa.me link
export const BUSINESS_NAME = "Roshan Medical Hall";

export function generateWhatsAppLink(payload: WhatsAppOrderPayload): string {
  const text = `Hello *${BUSINESS_NAME}*, I would like to place a Medicine Order / Inquiry:

👤 *Customer Name:* ${payload.customerName.trim()}
📞 *Phone:* ${payload.phone.trim()}
${payload.email ? `✉️ *Email:* ${payload.email.trim()}\n` : ''}📍 *Address:* ${payload.address.trim()}
💊 *Medicine Required:* ${payload.medicineRequired.trim()}
📋 *Prescription Available:* ${payload.prescriptionUploaded}
${payload.preferredTime ? `⏰ *Preferred Time:* ${payload.preferredTime.trim()}\n` : ''}${payload.notes ? `📝 *Notes:* ${payload.notes.trim()}\n` : ''}
Please confirm price & stock availability! Thank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateQuickWhatsAppLink(customText?: string): string {
  const defaultText = `Hello *${BUSINESS_NAME}*, I am looking for genuine medicines/healthcare products at ANMMCH Medical More, Gaya. Please assist me.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customText || defaultText)}`;
}

export function generateDirectionsLink(): string {
  return "https://www.google.com/maps/search/?api=1&query=ANMMCH+MEDICAL+MORE,+Nagmatia+Colony,+Gaya,+Bihar+823001";
}
