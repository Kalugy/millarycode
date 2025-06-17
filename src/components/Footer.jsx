import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B2829] text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo & Descripción + Redes */}
        <div>
          <div className="mb-4">
            <img src="/images/onlyLogo.webp" alt="Millary Logo" width={80} height={80} />
          </div>
          <p className="text-sm text-gray-100 mb-4">
            Conectamos sabores, tradición y pasión en cada plato. 
            <br />
            Gracias por visitarnos.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/millary.cocina/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://web.facebook.com/juan.quineman" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
          </div>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-semibold text-[#E98B07] text-lg mb-4">Nosotros</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-[#E98B07]">¿Quiénes somos?</a></li>
            <li><a href="#products" className="hover:text-[#E98B07]">Nuestros productos</a></li>
            <li><a href="#services" className="hover:text-[#E98B07]">Servicios</a></li>
            <li><a href="#contact" className="hover:text-[#E98B07]">Contacto</a></li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-semibold text-[#E98B07] text-lg mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Experiencias Gastronómicas</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Chef Personal</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Eventos Privados</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Almuerzos y Cenas Ejecutivas</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-[#E98B07] text-lg mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="mailto:contacto@millary.cl" className="hover:text-[#E98B07]">contacto@millary.cl</a></li>
            <li><a href="https://wa.link/q8rlm1" className="hover:text-[#E98B07]">+569 99 92 66 98</a></li>
            <li><a href="https://instagram.com/millary.cocina" target="_blank" className="hover:text-[#E98B07]">@millary.cocina</a></li>
          </ul>
        </div>

        {/* Ubicación */}
        <div>
          <h3 className="font-semibold text-[#E98B07] text-lg mb-4">Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596481.563180487!2d-73.49232901454828!3d-38.599922785688136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614b2c8d0e8c75d%3A0x31dd188520a10606!2sAraucania%2C%20Chile!5e0!3m2!1sen!2sco!4v1750196331332!5m2!1sen!2sco"
            width="100%"
            height="120"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Millary. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;