import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
    { name: "Contactanos", href: "https://wa.link/q8rlm1", isButton: true },
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
            <h1 className="text-xs md:text-lg xl:text-2xl font-bold ml-2 text-gray-800">
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

export default Navbar;