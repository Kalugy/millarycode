import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen px-6 py-20 lg:px-32 bg-white text-[#2B2829]" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#E98B07]">Sobre Nosotros</h2>

          <p className="mb-4 text-lg leading-relaxed">
            En <span className="font-semibold text-[#E52C35]">Millary</span>, fusionamos la pasión por la gastronomía con la riqueza de nuestro territorio. Nuestra misión es ofrecer experiencias culinarias que honran los sabores tradicionales, con un enfoque moderno y auténtico.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Somos un equipo comprometido con la calidad, la sostenibilidad y la innovación. Cada plato que servimos está cuidadosamente diseñado para resaltar los ingredientes locales y brindar una experiencia única a cada comensal.
          </p>

          <p className="text-lg leading-relaxed">
            Creemos que la comida no solo alimenta el cuerpo, sino también el alma. Por eso, en Millary no solo servimos platos, creamos recuerdos.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/Millary5.webp" alt="Chef en cocina" className="rounded-lg shadow-md" />
          <img src="/images/Millary4.webp" alt="Plato típico" className="rounded-lg shadow-md" />
          <img src="/images/Millary3.webp" alt="Ambiente del restaurante" className="rounded-lg shadow-md col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;