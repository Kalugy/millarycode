import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Juan Quiñeman",
    role: "Cocinero Mapuche",
    image: "/images/chef.webp",
    bio: "Amante de los sabores dulces de la Araucanía. Innovación con ingredientes nativos, sabores ancestrales y los productos regionales.",
    social: {
      instagram: "https://www.instagram.com/chef.juanquineman/",
      facebook: "https://web.facebook.com/juan.quineman",
      linkedin: "https://www.linkedin.com/in/juan-carlos-qui%C3%B1eman-67135026/",
    },
  },
  {
    name: "Carlos Méndez",
    role: "Sous Chef",
    image: "https://foodservice.aoachile.com/wp-content/uploads/2025/01/pro-removebg-preview.png",
    bio: "Enfocado en técnicas tradicionales y recolección de productos estacionales como piñones y hierbas frescas.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Valentina Ruiz",
    role: "Chef de Cocina Vegana",
    image: "https://foodservice.aoachile.com/wp-content/uploads/2025/01/pro-removebg-preview.png",
    bio: "Creadora de platos basados en quinoa, papas nativas y sabores auténticos de la región.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Andrés Soto",
    role: "Experto en Maridaje",
    image: "https://foodservice.aoachile.com/wp-content/uploads/2025/01/pro-removebg-preview.png",
    bio: "Fusiona sabores con bebidas artesanales para lograr una experiencia sensorial inolvidable.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const TeamSection = () => {
  return (
    <section
      id="equipo"
      className="bg-white py-24 px-6 lg:px-32 relative z-10"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="text-3xl font-bold text-center text-[#2B2829] mb-6">
        Nuestro Equipo
      </h2>

      <p className="text-center max-w-3xl mx-auto text-[#2B2829] mb-12 text-lg">
        <strong className="text-[#E52C35]">Chefs capacitados</strong> para dar la mejor experiencia única de sabores.
        Cocina con identidad propia, basada en productos locales de la Araucanía como{" "}
        <strong className="text-[#E98B07]">
          piñones, arvejas, murtilla, maqui, hierbas frescas, quinoas, papas nativas
        </strong>
        , entre otros. Uso de productos de temporada y de recolección.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="pb-28"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.name}>
            <div className="rounded-3xl shadow-xl border border-[#E98B07]/20 p-8 m-8 text-center h-full hover:shadow-2xl transition duration-300 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full border-4 border-[#E98B07] bg-white shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2829] mb-1">
                {member.name}
              </h3>
              <p className="text-[#E52C35] font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>

              <div className="flex gap-4 justify-center mt-auto">
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E52C35] hover:text-[#E52C35] text-xl transition">
                  <FaInstagram />
                </a>
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#E52C35] hover:text-[#E52C35] text-xl transition">
                  <FaFacebookF />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#E52C35] hover:text-[#E52C35] text-xl transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;
