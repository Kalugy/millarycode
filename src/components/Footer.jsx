import SocialIcon from '../assets/icons/SocialIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
import YouTubeIcon from '../assets/icons/YouTubeIcon';
import DiscordIcon from '../assets/icons/DiscordIcon';
const Footer = () => (
  <footer className="moving-gradient text-white py-8">
    <div className="container mx-auto px-4 md:flex md:justify-center md:items-center">
      {/* Logo and Tagline */}

      <div className="mb-6 md:mb-0">
        <div className="flex items-center justify-center">
          <img src="/images/test.png" alt="Logo" className="h-4" />
          <h2 className="text-2xl ml-2 font-bold">GROWVYN</h2>
        </div>
        <div className="flex text-gray-200 justify-center">Track your time. Unlock your potential.</div>
        <div className="flex space-x-4 justify-center">
          <SocialIcon onClick={() => window.open('https://www.facebook.com/profile.php?id=61567876286578')} path="M18 2H15a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.72l.78-4H14V7a1 1 0 011-1h3z" color="#1877F2" />
          <SocialIcon onClick={() => window.open('https://x.com/growvyn')} path="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.34 13.34 0 01-7 2c9 5 20-1 20-11.5a4.48 4.48 0 00-.08-.83A10.18 10.18 0 0023 3z" color="#1DA1F2" />
          <InstagramIcon size={18} color="#E1306C" onClick={() => window.open('https://instagram.com')} />
          <SocialIcon path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zm-8 2H4v12h4V10zm-2-6a2 2 0 110 4 2 2 0 010-4z" color="#0A66C2" />
        
          <YouTubeIcon size={18} color="#FF0000" onClick={() => window.open('https://www.youtube.com/@Growvyn')} />
          <DiscordIcon size={18} color="#5865F2" onClick={() => window.open('https://discord.gg/X8vddq9P')} />

        </div>
      </div>
     
    </div>
    {/* Copyright Section */}
    <div className="mt-2 text-center text-gray-200 text-sm">
      &copy; {new Date().getFullYear()} GROWVYN. All rights reserved.
    </div>
  </footer>
);

export default Footer;
