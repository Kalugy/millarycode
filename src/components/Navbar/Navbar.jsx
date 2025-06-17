import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
    { name: "Reservas", href: "https://wa.link/q8rlm1", isButton: true },
  ];
 
  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between px-4 py-1 xl:px-80">
        {/* Logo */}
        <NavLink className="cursor-pointer" to="/" >
          <div className="flex ml-1 md:ml-9 align-middle items-center">
            <img src="/images/onlyLogo.webp" alt="Logo" className="h-12" />
            <h1 className="text-xs md:text-lg xl:text-2xl italic font-bold ml-2 text-gray-800">
              Millary
            </h1>
          </div>
        </NavLink>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) =>
            item.isButton ? (
              <a 
                key={item.name} 
                href={item.href} 
                target="_blank"
                className="px-4 py-2 rounded bg-[#E52C35] font-bold text-white hover:bg-red-700 hover:opacity-90 transition"
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-gray-800 hover:text-gray-600 transition"
              > 
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-xl text-gray-800"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center">
                <img src="/images/onlyLogo.webp" alt="Logo" className="h-10" />
                <h1 className="text-lg font-bold ml-2 text-gray-800">Millary</h1>
              </div>
            </NavLink>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-gray-800"
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center justify-center gap-8 p-4">
            {menuItems.map((item) =>
              item.isButton ? (
                <li key={item.name} className="w-full">
                  <a
                    href={item.href}
                    target="_blank"
                    onClick={handleMenuClick}
                    className="block w-full px-6 py-3 text-center rounded bg-[#E52C35] font-bold text-white hover:bg-red-700 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                <li key={item.name} className="w-full">
                  <a
                    href={item.href}
                    onClick={handleMenuClick}
                    className="block w-full px-6 py-3 text-center text-lg font-semibold text-gray-800 hover:text-gray-600 transition"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const BackgroundCircle = () => {
  return (
    <div
      className="absolute top-5 left-5 w-12 h-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/onlyLogo.webp')", // Replace with your image path
      }}
    ></div>
  );
};


const Navbar2 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  

   const handleMenuClick = (href) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (href.startsWith("#")) {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        
      }
    }, 300);
  };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
      isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-white"
    }`}>
      <div className="flex items-center justify-between px-4 py-3 lg:px-20">
        <NavLink className="cursor-pointer" to="/" onClick={scrollToTop}>
          <div className="flex items-center gap-2">
            <img src="/images/onlyLogo.webp" alt="Millary Logo" className="h-10" />
            <h1 className="text-xl font-bold text-gray-800">Millary</h1>
          </div>
        </NavLink>

        <div className="hidden md:flex gap-8 items-center">
          {
            menuItems.map((item) => {
              const isExternal = item.href.startsWith("http");
              const isAnchor = item.href.startsWith("#");

              if (isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      item.isButton
                        ? "px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
                        : "text-gray-700 font-medium hover:text-black"
                    } transition`}
                  >
                    {item.name}
                  </a>
                );
              }

              if (isAnchor) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.isButton
                        ? "px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
                        : "text-gray-700 font-medium hover:text-black"
                    } transition`}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`${
                    item.isButton
                      ? "px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
                      : "text-gray-700 font-medium hover:text-black"
                  } transition`}
                >
                  {item.name}
                </NavLink>
              );
            })
          }
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full min-h-screen bg-white transform transition-transform duration-500 ease-in-out z-40 overflow-y-auto flex flex-col items-center pt-12 px-4`}
        >
          {/* Cerrar botón */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-6 text-3xl text-gray-800"
          >
            ✕
          </button>

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => {
              scrollToTop();
              setMobileMenuOpen(false);
            }}
            className="mb-8"
          >
            <div className="flex items-center gap-2">
              <img src="/images/onlyLogo.webp" alt="Millary Logo" className="h-10" />
              <h1 className="text-xl font-bold text-gray-800">Millary</h1>
            </div>
          </NavLink>

          {/* Menú móvil */}
          <ul className="flex flex-col items-center justify-center gap-8 w-full">
            {menuItems.map((item) => {
              const isExternal = item.href.startsWith("http");

              return (
                <li key={item.name} className="flex items-center gap-2">
                  {isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-lg font-semibold flex items-center gap-2 ${
                        item.isButton
                          ? "px-6 py-2 rounded bg-black text-white hover:bg-gray-800"
                          : "text-gray-800 hover:text-black"
                      } transition`}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h6m0 0v6m0-6L10 17"
                        />
                      </svg>
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={() => handleMenuClick(item.href)}
                      className={`text-lg font-semibold ${
                        item.isButton
                          ? "px-6 py-2 rounded bg-black text-white hover:bg-gray-800"
                          : "text-gray-800 hover:text-black"
                      } transition`}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;