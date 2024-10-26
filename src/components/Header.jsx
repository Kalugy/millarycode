const Header = () => (
  <header className="h-screen bg-gradient-to-r from-blue-600 to-green-500 text-white flex flex-col">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold">GROWVYN</h1>
      <nav>
        <a href="#features" className="mx-4 text-white hover:text-green-300">Features</a>
        <a href="#contact" className="mx-4 text-white hover:text-green-300">Contact</a>
      </nav>
    </div>

    <div className="flex-grow flex items-center justify-center text-center">
      <div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          Track Time. Grow Wisely.
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Take control of your day with GROWVYN. Start building better habits today.
        </p>
        <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  </header>
);

export default Header;
