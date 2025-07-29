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
    role: "Chef y Fundador",
    image: "/images/chef.webp",
    bio: "Destacado cocinero chileno con más de 25 años de trayectoria. Ha sido chef ejecutivo en importantes hoteles como Sheraton Miramar, Hotel Antay y la cadena Marriott. Actualmente lidera Millary, empresa de agroturismo y banquetería con enfoque en productos de temporada, cocina sustentable y gastronomía mapuche.",
    bio2: "Es miembro de la Asociación de Chefs de Chile “Les Toques Blanches”, socio de la Sociedad de Turismo Mapuche y parte del comité que impulsó la creación del Día de la Gastronomía Mapuche (26 de octubre).",
    social: {
      instagram: "https://www.instagram.com/chef.juanquineman/",
      facebook: "https://web.facebook.com/juan.quineman",
      linkedin: "https://www.linkedin.com/in/juan-carlos-qui%C3%B1eman-67135026/",
    },
  },
  {
    name: "Grace Correa",
    role: "Lider de Anfitriones",
    image: "/images/grace.jpg",
    bio: "Con mas de 15 años experiencia en el sector de Atención de Publico. Destaca por su calidez, empatía y excepcional vocación de Servicio. Con una sólida trayectoria en atención al cliente, lidera con profesionalismo y cercanía a su equipo, garantizando una experiencia acogedora, eficiente y de alto nivel en cada evento.",
    bio2: "Su compromiso, capacidad organizativa y estilo de liderazgo humano la convierten en una figura clave en la excelencia y el sello distintivo de hospitalidad que caracterizan a Millary.",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Rita Allilef",
    role: "Chef",
    image: "/images/rita.jpg",
    bio: "Con más de 15 años de trayectoria en el mundo gastronómico, habiendo trabajado en destacadas cocinas como las del Hotel Hyatt, Hotel & Casino Monticello y Hacienda Santa Martina, entre otras. Reconocida cocinera mapuche, es autora del libro 'El Alma de lo Nuestro', donde plasma su profunda conexión con la cocina ancestral.",
    bio2: "Apasionada promotora de la cultura y gastronomía mapuche, Rita participa activamente en eventos, talleres y experiencias culinarias que ponen en valor nuestras raíces y tradiciones.",
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
        <strong className="text-[#E52C35]">Chef y Anfitriones </strong>capacitados para dar la mejor experiencia única de sabores.
        Cocina con identidad propia, basada en productos locales de la Araucanía como{" "}
        <strong className="text-[#E98B07]">
          piñones, arvejas, murtilla, maqui, hierbas frescas, quinoas, papas nativas
        </strong>
        , entre otros. Uso de productos de temporada y de recolección.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={3}
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
                  className="w-full h-full object-fill"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2829] mb-1">
                {member.name}
              </h3>
              <p className="text-[#E52C35] font-medium mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{member.bio2}</p>
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
