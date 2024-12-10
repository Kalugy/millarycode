import { useTheme } from "./Theme/ThemeContext";

const BackgroundCircle = () => {
  return (
    <div
      className="absolute top-10 md:top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-cover bg-center rounded-full"
      style={{
        backgroundImage: "url('/images/newBg.png')", // Replace with your image path
      }}
    ></div>
  );
};

const BackgroundCircle2 = () => {
  return (
    <div
      className="absolute invisible md:visible top-0 md:left-0 w-32 h-32 md:w-15 md:h-60 -translate-y-9 bg-cover bg-center rounded-full"
      style={{
        backgroundImage: "url('/images/pupa.png')", // Replace with your image path
      }}
    ></div>
  );
};

const Header = () => {
  const { theme } = useTheme();

  return (
    <header id="home" className="h-screen flex flex-col relative">
    {/* Background */}
    <BackgroundCircle />
    <BackgroundCircle2 />

    {/* Main Content */}
    <div className="flex-grow flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 collapse">
          Growvyn
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold">
          Track Time. Grow Wisely.
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Take control of your days with <strong>Growvyn</strong>. Start
          building better habits today.
        </p>
        <button className={`button-base button-${theme} mt-6`}>
          Get Started!
        </button>
      </div>
    </div>
  </header>
)};

export default Header;
