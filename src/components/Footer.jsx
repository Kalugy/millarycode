import React from "react";
import { useTheme } from "./Theme/ThemeContext";

import InstagramIcon from '../assets/icons/InstagramIcon';
import YouTubeIcon from '../assets/icons/YouTubeIcon';
import DiscordIcon from '../assets/icons/DiscordIcon';
import SocialIcon from '../assets/icons/SocialIcon';
import { ThemeSelectorButtons } from './Theme/ThemeSelector'

import { NavLink } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

const Footer = () => {
  const { theme, switchTheme } = useTheme();
  const scrollToTop = useScrollToTop();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "WhitePaper", href: "/whitepaper" },
  ];

  const socialMediaLinks = [
    { href: "https://www.facebook.com/profile.php?id=61567876286578", 
      icon: <SocialIcon color="#1877F2" path="M18 2H15a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.72l.78-4H14V7a1 1 0 011-1h3z"/>, 
      label: "Facebook" },
    { href: "https://x.com/growvyn", 
      icon: <SocialIcon color="#1877F2" path="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.34 13.34 0 01-7 2c9 5 20-1 20-11.5a4.48 4.48 0 00-.08-.83A10.18 10.18 0 0023 3z"/>, 
      label: "Twitter" 
    },
    { href: "https://instagram.com", icon: <InstagramIcon />, label: "Instagram" },
    { href: "https://www.youtube.com/@Growvyn", icon: <YouTubeIcon />, label: "Youtube" },
    { href: "https://discord.gg/X8vddq9P", icon: <DiscordIcon />, label: "Discord" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className="py-6">
      <div className=" w-100% flex flex-col gap-5 md:flex-row lg:justify-around">
        {/* Left Side: Site Info and Theme Buttons */}
        <div className="mb-4 md:mb-0 ">
          <div className="flex flex-row gap-2">
            <img src="/images/newLogo.png" alt="Logo" className="h-6 rotate-[10deg]" />
            <h4 className="text-xl font-bold mb-2">Growvyn</h4>
          </div>
          <p className="text-sm mb-4">Tracking your activities easier and grow wisely</p>
          <ThemeSelectorButtons/>
        </div>

        {/* Right Side: Quick Navigation */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-bold mb-2">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <NavLink 
                  to={link.href} 
                  className="hover:text-blue-400 transition duration-300"
                  onClick={scrollToTop}
                  >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-bold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="mt-8 text-center  text-sm ">
        &copy; {new Date().getFullYear()} Growvyn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
