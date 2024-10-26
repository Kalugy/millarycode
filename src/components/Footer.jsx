const Footer = () => (
  <footer className="bg-gray-700 text-white py-8">
    <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
      {/* Logo and Tagline */}
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold">GROWVYN</h2>
        <p className="text-gray-400">Track your time. Unlock your potential.</p>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 justify-center md:justify-start">
        <a href="#features" className="text-gray-400 hover:text-white transition">
          Features
        </a>
        <a href="#pricing" className="text-gray-400 hover:text-white transition">
          Pricing
        </a>
        <a href="#contact" className="text-gray-400 hover:text-white transition">
          Contact Us
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 md:mt-0 flex space-x-6 justify-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <i className="fab fa-twitter"></i> {/* Example Icon */}
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-8 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} GROWVYN. All rights reserved.
    </div>
  </footer>
);

export default Footer;
