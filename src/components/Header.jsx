import { useTheme } from "./Theme/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
  <header id="home" className={`h-screen flex flex-col`}>
    
    <div className="flex-grow flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 collapse">
          Growvyn
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Track Time. Grow Wisely.
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Take control of your days with <strong className="">Growvyn</strong>. Start building better habits today.
        </p>
        <button className={`button-base button-${theme} mt-6`}>
          Get Started!
        </button>
      </div>
    </div>
  </header>
)};

export default Header;
