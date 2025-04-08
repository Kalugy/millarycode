import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaUtensils } from "react-icons/fa";

const platesData = [
  {
    src: "/images/Millary6.webp",
    title: "Entrada de la Casa",
    category: "entrada",
  },
  {
    src: "/images/Millary2.webp",
    title: "Bocadito Verde de la Tierra",
    category: "entrada",
  },
  {
    src: "/images/Millary4.webp",
    title: "Corte Rústico con Reducción Mapuche",
    category: "principal",
  },
  {
    src: "/images/Millary5.webp",
    title: "Trilogía de Carnes y Tubérculos",
    category: "principal",
  },
  {
    src: "/images/Millary3.webp",
    title: "Estofado Andino con Granos Nativos",
    category: "principal",
  },
  {
    src: "/images/dessert1.webp",
    title: "Muffin de la Araucanía",
    category: "postre",
  },
];


const categories = ["todos", "entrada", "principal", "postre"];

const PlatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPlates =
    selectedCategory === "todos"
      ? platesData
      : platesData.filter((plate) => plate.category === selectedCategory);

  return (
    <section className="bg-white py-16 px-6 lg:px-20 text-[#2B2829]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
          <FaUtensils className="text-[#E52C35]" /> Nuestros Platos
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Conoce algunas de nuestras especialidades, elaboradas con productos locales y de temporada.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              category === selectedCategory ? "bg-[#E52C35] text-white border-[#E52C35]" : "bg-white text-[#2B2829] border-gray-300 hover:border-[#E52C35]"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlates.map((plate, index) => (
          <div
            key={index}
            className="rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            <img
              src={plate.src}
              alt={plate.title}
              className="w-full h-46 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#E98B07]">{plate.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={filteredPlates.map((plate) => ({
          src: plate.src,
          title: plate.title,
        }))}
      />
    </section>
  );
};

export default PlatesSection;
