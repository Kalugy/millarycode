import { useTheme } from "../Theme/ThemeContext";
const Hero = () => {
  const { theme } = useTheme()
  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'User CLICK',
        event_label: 'Clicked TO SEE Growvyn page',
      });

    }
    
    // Open Growvyn app in a new tab
    window.open('https://app.growvyn.com/', '_blank');
  };


  return (
  <section className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-4">Its a place to order your life</h2>
      <p className="text-lg mb-8">
        <span className="font-bold italic">Growvyn</span> helps you track your time effectively to achieve your goals and unlock your potential.
      </p>
      <button onClick={handleClick} className={`button-base button-${theme} mt-6`}>
        Get Started!
      </button>
    </div>
  </section>
)};

export default Hero;

  