import { useTheme } from "./Theme/ThemeContext";

const Features = () => {
  

  return(
  <section id="features" className="py-16">
    <div className="mx-1 md:mx-9 px-1 md:px-4">
      <h3 className="text-4xl font-extrabold text-center mb-12">
        Track Every Aspect of Your Life
      </h3>
      <p className="text-center mb-8">
        Manage your activities, goals, and personal growth all in one place.
      </p>
      <div className="grid gap-3 md:gap-8 md:grid-cols-3 xl:gap-8 xl:grid-cols-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  </section>
)};

const FeatureCard = ({ title, description, icon }) => {
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueBg',
    green: 'bg-greenBg',
  };
  
  return (
  <div className="relative group overflow-hidden bg- rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div className={`absolute inset-0 ${bgClasses[theme]} opacity-80`}></div>
    <div className="relative p-8 z-10">
      <div className="text-5xl mb-4">{icon}</div>
      <h4 className="text-2xl justify-center font-bold mb-2">{title}</h4>
      <p className=" text-justify">{description}</p>
    </div>
  </div>
)};

const features = [
  {
    title: "Interactive Calendar",
    description: "Organize your time efficiently with a calendar that adapts to your goals.",
    icon: "📅",
  },
  {
    title: "Track Your Hobbies",
    description: "Log and monitor your hobbies to keep the fun alive and stay consistent.",
    icon: "🎨",
  },
  {
    title: "Financial Tracking",
    description: "Stay on top of your finances with an intuitive tracking tool.",
    icon: "💰",
  },
  {
    title: "Set and Achieve Goals",
    description: "Break down your dreams into actionable tasks with smart feedback.",
    icon: "🎯",
  },
  {
    title: "Daily Activity Monitoring",
    description: "Get insights on how you spend your day and find areas for improvement.",
    icon: "🏃",
  },
  {
    title: "AI-Powered Insights",
    description: "Let AI guide you with personalized recommendations and analytics.",
    icon: "🤖",
  },
];


export default Features;
