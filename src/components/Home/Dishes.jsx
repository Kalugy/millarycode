import { useState } from "react";

function Dishes() {
  return (
    <div className="min-h-screen bg-[#F9F7F6] flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Algunos platos de temporada
        </h1>
        <p className="text-gray-500 mb-6">
          Las mejores recetas de la región, con ingredientes de temporada y productos locales.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://wa.link/q8rlm1" target="_blank" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
            Contactanos!
          </a>
          <a href="https://wa.link/q8rlm1" target="_blank" className="flex items-center text-orange-500 font-semibold">
            Conoce más
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Dishes Section */}
      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {/* Dish Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-4 w-64 text-center">
          <img
            src="/images/Millary7.webp"
            alt="Special Roasted Fish"
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-center mb-2">
            {Array(5).fill("★").map((star, index) => (
              <span key={index} className="text-yellow-400">{star}</span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Experiencia Millary</h3>
          {/* <p className="text-orange-500 text-xl mt-2">$20</p> */}
        </div>

        {/* Dish Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-4 w-64 text-center">
          <img
            src="/images/MillaryStand.webp"
            alt="Experiencia Millary"
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-center mb-2">
            {Array(5).fill("★").map((star, index) => (
              <span key={index} className="text-yellow-400">{star}</span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Eventos con buen sabor</h3>
          {/* <p className="text-orange-500 text-xl mt-2">$25</p> */}
        </div>

        {/* Dish Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-4 w-64 text-center relative">
          <img
            src="/images/Millary2.webp"
            alt="Bocadito Verde"
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-center mb-2">
            {Array(5).fill("★").map((star, index) => (
              <span key={index} className="text-yellow-400">{star}</span>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 py-4">Gastronomía Mapuche</h3>
          {/* <p className="text-orange-500 text-xl mt-2">$35</p> */}
          
        </div>
      </div>
    </div>
  );
}

export default Dishes;