import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '233559470150'; // WhatsApp format without + or spaces
  const message = 'Hello! I would like to inquire about Bloomings Plus Montessori.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
