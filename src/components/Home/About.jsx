import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Theme/ThemeContext";

const tabs = [
  { 
    title: "Smart Calendar Views", 
    content: "Stay on top of your schedule with intuitive calendar views that highlight key events, deadlines, and reminders. AI helps identify time gaps and suggest optimal scheduling for better time management.",
    image: "/images/agenda.png"
  },
  { 
    title: "Finance Tracking", 
    content: "Monitor your expenses and income with ease. AI analyzes your spending patterns, offers insights on savings opportunities, and helps you create smarter budgets to achieve financial stability.",
    image: "/images/agenda3.png"
  },
  { 
    title: "Hobby & Goal Tracking", 
    content: "Track progress in your favorite activities, from fitness to learning new skills. AI provides personalized recommendations, milestone reminders, and motivational insights to keep you improving.",
    image: "/images/agenda2.png"
  },
  { 
    title: "AI Helpers", 
    content: "With Growvyn’s AI assistance, you’ll not only stay organized but also continuously optimize your life. Take the first step toward a more structured and productive future today!",
    image: "/images/agenda4.png"
  },
];

export default function AboutGrowvyn() {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={` relative flex flex-col w-full gap-6 py-2 items-center text-center px-4 sm:px-6 lg:px-2`}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold "
      >
        About Growvyn
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-base sm:text-lg  max-w-2xl"
      >
        Growvyn is your personal hub for managing time, goals, and personal growth. Stay organized and focused with tools designed to help you unlock your full potential.
      </motion.p>
      <div className="relative flex flex-col w-full max-w-3xl items-center mt-10">
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 justify-center">
          {tabs.map((tab, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setActiveTab(index)}
                className={`button-base button-${theme} px-3 sm:px-4 py-2 rounded-lg transition-all text-sm sm:text-base ${activeTab === index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                {tab.title}
              </button>
              {activeTab === index && (
                <motion.div 
                  className={`absolute bottom-0 left-0 w-full h-2 button-${theme} rounded-lg`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${bgClasses[theme]} shadow-lg mt-3 rounded-lg p-4 sm:p-6 lg:p-10 w-full text-sm sm:text-lg flex flex-col md:flex-row items-center gap-4 sm:gap-6`}
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold">{tabs[activeTab].title}</h2>
            <p className="mt-1 sm:mt-2">{tabs[activeTab].content}</p>
          </div>
          <div className="w-full md:w-1/3">
            <img src={tabs[activeTab].image} alt={tabs[activeTab].title} className="w-full h-auto rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}