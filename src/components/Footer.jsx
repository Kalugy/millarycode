import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from '../assets/icons/InstagramIcon';
import YouTubeIcon from '../assets/icons/YouTubeIcon';
import SocialIcon from '../assets/icons/SocialIcon';

import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


const contactInfo = [
  {
    icon: <FaEnvelope className="text-[#05CCB4] text-2xl" />, // Turquesa
    title: "Email",
    value: "contacto@millary.cl",
  },
  {
    icon: <FaPhoneAlt className="text-[#0955E7] text-2xl" />, // Azul
    title: "Teléfono",
    value: "+569 99 92 66 98",
  },
  {
    icon: <FaWhatsapp className="text-[#05CCB4] text-2xl" />, // Turquesa
    title: "WhatsApp",
    value: "+569 99 92 66 98",
  },
  {
    icon: <FaMapMarkerAlt className="text-[#E52C35] text-2xl" />, // Rojo
    title: "Ubicación",
    value: "Santiago, Chile"
  },
];


const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" }
  ];

  const socialMediaLinks = [
    {
      href: "https://web.facebook.com/juan.quineman",
      icon: () => <SocialIcon color="#1877F2" path="M18 2H15a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.72l.78-4H14V7a1 1 0 011-1h3z" />, 
      label: "Facebook"
    },
    // {
    //   href: "https://x.com/",
    //   icon: () => <SocialIcon color="#1877F2" path="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.34 13.34 0 01-7 2c9 5 20-1 20-11.5a4.48 4.48 0 00-.08-.83A10.18 10.18 0 0023 3z" />,
    //   label: "Twitter"
    // },
    { href: "https://www.instagram.com/millary.cocina/", icon: InstagramIcon, label: "Instagram" },
    // { href: "https://www.youtube.com/", icon: YouTubeIcon, label: "Youtube" },
  ];


  return (
    <footer className="bg-[#2B2829] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-left gap-10 md:gap-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/onlyLogo.webp" alt="Millary Logo" className="h-8 rotate-[10deg]" />
            <h4 className="text-2xl font-bold">Millary</h4>
          </div>
          <p className="text-sm text-gray-300 max-w-xs">
            Conectamos sabores, tradición y pasión en cada plato. Gracias por visitarnos.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#E98B07] pt-5">Síguenos</h4>
            <div className="flex gap-4">
              {socialMediaLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-[#E52C35] text-white transition text-2xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#E98B07]">Empresa </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <NavLink
                      to={link.href}
                      className="hover:text-[#E98B07] transition"
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#E98B07] transition"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>        
        </div>
        {/* Servicios */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#E98B07]">Servicios</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Experiencias Gastronómicas</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Chef Personal</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Eventos Privados</a></li>
            <li><a href="https://wa.link/q8rlm1" target="_blank" className="hover:text-[#E98B07] transition">Almuerzos y Cenas Ejecutivas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#E98B07]">Contacto</h4>
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/*<span>{item.icon}</span>*/}
                <div>
                  <p className="text-sm font-medium">{item.title}:</p>
                  {item.title === "Email" ? (
                    <a href={`mailto:${item.value}`} className="text-sm hover:text-[#E98B07] transition">
                      {item.value}
                    </a>
                  ) : item.title === "WhatsApp" ? (
                    <a
                      href="https://wa.link/q8rlm1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-[#E98B07] transition"
                    >
                      {item.value}
                    </a>
                  ) : item.title === "Teléfono" ? (
                    <a
                      href={`tel:${item.value.replace(/\s/g, "")}`}
                      className="text-sm hover:text-[#E98B07] transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Millary. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;