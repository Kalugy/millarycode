import React from "react";

const AboutUsDescription = () => {
  return (
    <section className="bg-[#F9F7F6] px-6 py-24 lg:px-32 text-[#2B2829]" id="about-description">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="lg:w-1/2 relative order-1 lg:order-none">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E98B07]">
            <img
              src="/images/Millary1.webp"
              alt="Nuestra cocina"
              className="w-full object-cover h-[500px]"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold mb-6 text-[#E98B07]">Nuestra Esencia</h2>
            <p className="mb-4 text-lg leading-relaxed">
              En <span className="font-semibold text-[#E52C35]">Millary</span>, creemos que la gran diferencia está en el sabor auténtico de los productos locales. Nuestra esencia nace de la <strong>gastronomía mapuche contemporánea</strong>, que rescata técnicas ancestrales y las fusiona con presentaciones modernas y elegantes.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Usamos ingredientes de temporada como piñones, papas nativas, maqui, murtilla y más, recolectados con respeto por la tierra. Cada plato es una expresión de identidad, una experiencia sensorial y un homenaje a nuestras raíces.
            </p>
            <p className="text-lg leading-relaxed">
              Con técnicas culinarias bien desarrolladas, buscamos sorprender no solo por el sabor, sino también por la historia que cada preparación cuenta. En Millary, cocinamos con el corazón, desde y para el territorio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDescription;