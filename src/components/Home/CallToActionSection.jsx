import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CtaSection = () => {
  return (
    <section className="bg-[#05CCB4] py-16 px-6 lg:px-20 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">¿Listo para una experiencia gastronómica única?</h2>
        <p className="text-lg mb-8">
          Reserva tu cupo ahora y vive una explosión de sabores con identidad local.
        </p>
        <a
          href="https://wa.link/w281f3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#2B2829] font-semibold text-lg shadow-lg hover:bg-gray-200 transition"
        >
          <FaWhatsapp className="text-2xl text-[#25D366]" href="https://wa.link/q8rlm1" /> ¡Reserva por WhatsApp!
        </a>
      </div>
    </section>
  );
};

export default CtaSection;