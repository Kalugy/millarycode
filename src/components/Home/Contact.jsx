import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-[#05CCB4] text-2xl" />, // Turquesa
    title: "Email",
    value: "contacto@millary.cl",
  },
  {
    icon: <FaPhoneAlt className="text-[#0955E7] text-2xl" />, // Azul
    title: "Teléfono",
    value: "+569 99 92 66 98",
  },
  {
    icon: <FaWhatsapp className="text-[#05CCB4] text-2xl" />, // Turquesa
    title: "WhatsApp",
    value: "+569 99 92 66 98",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#E52C35] text-2xl" />, // Rojo
    title: "Ubicación",
    value: "Santiago, Chile"
  },
];

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2B2829] mb-12">Contáctanos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-6 bg-[#F9F6F2] p-6 rounded-xl shadow-sm hover:shadow-md transition">
            {item.icon}
            <div>
              <h4 className="text-lg font-semibold text-[#E98B07]">{item.title}</h4>
              <p className="text-[#2B2829]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;