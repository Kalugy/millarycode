import React from "react";

const services = [
  {
    title: "Servicio de Coffee Break",
    description: "Ofrecemos coffee breaks completos con opciones dulces y saladas para reuniones, capacitaciones o eventos empresariales.",
    image: "/images/cocktail.webp"
  },
  {
    title: "Almuerzos y Cenas Ejecutivas",
    description: "Menús personalizados para ejecutivos que buscan calidad, presentación y sabor en sus comidas corporativas.",
    image: "/images/dessert1.webp"
  },
  {
    title: "Cenas Experiencias",
    description: "Cenas temáticas que fusionan gastronomía y cultura, ofreciendo una experiencia inolvidable para tus invitados.",
    image: "/images/Millary6.webp"
  },
  {
    title: "Cocktail para Distintas Actividades",
    description: "Cocktails sofisticados con variedad de bocados y bebidas, ideales para eventos sociales y empresariales.",
    image: "/images/Millary7.webp"
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F9F6F2] py-16 px-4 md:px-16" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2B2829]">Nuestros Servicios</h2>
      <div className="grid gap-12 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full md:w-48 h-48 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#E98B07] mb-2">{service.title}</h3>
              <p className="text-[#2B2829] text-sm md:text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;