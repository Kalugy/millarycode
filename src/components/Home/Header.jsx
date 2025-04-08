import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/Millary62.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#E98B07]">
          Experiencias Gastronómicas con Identidad
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white">
          En Millary creamos momentos inolvidables con sabores auténticos del territorio.
        </p>
        <Link
          to="https://wa.link/q8rlm1"
          target="_blank"
          className="bg-[#E52C35] hover:bg-[#c5252d] text-white px-6 py-3 rounded font-medium transition duration-300"
        >
          Reserva ahora
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;
