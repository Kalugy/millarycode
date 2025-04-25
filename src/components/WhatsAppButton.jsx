import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace this with your actual WhatsApp number
    const phoneNumber = '1234567890';
    const message = 'Hello! I would like to know more about your services!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none">
      {/* Ripple effect wrapper */}
      <div className="absolute -inset-2 bg-[#25D366] rounded-full opacity-30 animate-ping pointer-events-none"></div>
      
      {/* Notification dot */}
      <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-bounce pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-red-500 animate-pulse"></div>
      </div>

      {/* Main button */}
      <button
        onClick={handleClick}
        className="relative bg-[#25D366] hover:bg-[#128C7E] border-1 border-white text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-4xl animate-wiggle" />
      </button>
    </div>
  );
};

export default WhatsAppButton;