import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Theme/ThemeContext";
const timelines = {
  "2024": [
    { 
      date: "10/12/2024", 
      title: "Stage 1", 
      subtitle: "Project Kickoff", 
      stage: "Initiation", 
      feature: "Overall Project", 
      description: "The official start of the project. This phase includes setting objectives, defining the scope, assigning key roles, and establishing timelines." 
    },
    { 
      date: "11/02/2024", 
      title: "Stage 2", 
      subtitle: "Requirement Gathering", 
      stage: "Planning", 
      feature: "Overall Project", 
      description: "Detailed research and documentation of functional and technical requirements. Teams collaborate to ensure alignment on goals and feasibility." 
    },
    { 
      date: "11/23/2024", 
      title: "Stage 3", 
      subtitle: "Development Phase - PomoApp", 
      stage: "DEV", 
      feature: "PomoApp", 
      description: "The development team starts coding, implementing features, and setting up the application architecture for the PomoApp. Prototyping and iterative testing take place." 
    },
    { 
      date: "12/14/2024", 
      title: "Stage 4", 
      subtitle: "Testing Phase", 
      stage: "QA", 
      feature: "PomoApp", 
      description: "Quality assurance and testing begin for the PomoApp. This includes unit testing, integration testing, and bug fixes to ensure functionality and stability before deployment." 
    },
    { 
      date: "12/21/2024", 
      title: "Stage 5", 
      subtitle: "Deployment", 
      stage: "DEPLOY", 
      feature: "PomoApp", 
      description: "The final version of PomoApp is deployed to production. The team monitors performance and resolves any last-minute issues to ensure a smooth launch." 
    },
  ],
  "2025": [
    { 
      date: "01/18/2025", 
      title: "Stage 3", 
      subtitle: "Development Phase - Calendar", 
      stage: "DEV", 
      feature: "Calendar", 
      description: "Implementation of the Calendar feature. Development includes frontend and backend integration, scheduling logic, and user experience optimization." 
    },
    { 
      date: "02/22/2025", 
      title: "Stage 3", 
      subtitle: "Development Phase - Habit", 
      stage: "DEV", 
      feature: "Habit Tracker", 
      description: "Development and integration of the Habit Tracker module, focusing on user habit tracking, notifications, and performance analytics." 
    },
    { 
      date: "03/15/2025", 
      title: "Stage 4", 
      subtitle: "Testing Phase", 
      stage: "QA", 
      feature: "Calendar ", 
      description: "Extensive testing is conducted, including usability testing, performance testing, and security assessments to ensure system reliability for the Calendar and Habit Tracker features." 
    },
    { 
      date: "03/22/2025", 
      title: "Stage 5", 
      subtitle: "Deployment", 
      stage: "DEV", 
      feature: "Finance", 
      description: "The finance modules are deployed to production. Final optimizations are made, and post-launch monitoring ensures system stability." 
    },
    { 
      date: "04/12/2025", 
      title: "Stage 5", 
      subtitle: "Deployment", 
      stage: "DEPLOY", 
      feature: "Finance", 
      description: "The Calendar and Habit Tracker modules are deployed to production. Final optimizations are made, and post-launch monitoring ensures system stability." 
    },
  ],
};


export default function TimelineCarousel() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [currentStage, setCurrentStage] = useState(0);

  const timelineStages = timelines[selectedYear];
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };
  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % timelineStages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [selectedYear, timelineStages.length]);

  // Handle navigation manually
  const nextStage = () => {
    setCurrentStage((prev) => (prev + 1) % timelineStages.length);
  };

  const prevStage = () => {
    setCurrentStage((prev) =>(prev - 1 + timelineStages.length) % timelineStages.length);
  };

  return (
    <div className={`${bgClasses[theme]} flex flex-col items-center justify-center min-h-screen  p-4 md:p-6 `}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold "
      >
        Growvyn Timeline
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-base sm:text-lg  max-w-2xl text-center"
      >
        See Growvyn past, present, and future at a glance. see events, milestones, and progress!     </motion.p>
      {/* Year Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 mb-6">
        {Object.keys(timelines).map((year) => (
          <button
            key={year}
            onClick={() => {
              setSelectedYear(year);
              setCurrentStage(0);
            }}
            className={`px-6 py-2 rounded-lg button-base  transition-all duration-300 ${
              selectedYear === year ? `button-${theme}` : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Timeline Navigation */}
      <div className="flex items-center space-x-2 w-full max-w-5xl">
        <button onClick={prevStage} className="-mt-9 p-2 bg-gray-700 rounded-3xl hover:bg-gray-600">
          ←
        </button>

        {/* Timeline (Responsive) */}
        <div className="relative flex items-center w-full h-60 overflow-x-auto overflow-hidden md:overflow-visible">
          {/* Connecting Line */}
          <div className="absolute top-16 md:top-24 left-14 w-100 right-0 h-1 bg-gray-500  md:block"></div>

          <div className="flex md:justify-between w-full md:w-auto space-x-4 md:space-x-0 md:flex-row">
            {timelineStages.map((stage, index) => (
              //w-32 md:w-1/4
              <div key={index} className="relative flex flex-col items-center w-32 md:w-100 text-center flex-shrink-0">
                <button
                  onClick={() => setCurrentStage(index)}
                  className={`p-3 md:mt-14 rounded-full transition-all duration-300 ${
                    currentStage === index ? "bg-emerald-600 scale-110" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
                
                {/* <span className="-mt-14 text-xs text-gray-300"></span> */}
                <span className="mt-2 text-sm font-semibold">{stage.date}</span>
                <span className="mt-2 text-sm font-semibold">{stage.title}</span>
                <span className="text-sm font-semibold">{stage.stage}</span>
                <span className="text-xs font-semibold">{stage.feature}</span>


              </div>
            ))}
          </div>
        </div>

        <button onClick={nextStage} className="-mt-9 p-2 bg-gray-700 rounded-full hover:bg-gray-600">
          →
        </button>
      </div>

      {/* Carousel Content */}
      <div className="relative mt-5 w-full max-w-lg h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full button-${theme} p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-2xl font-bold">{timelineStages[currentStage].title}</h2>
            <h3 className="text-lg font-semibold mt-1">{timelineStages[currentStage].subtitle}</h3>
            <p className="text-lg ">{timelineStages[currentStage].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Description Section - Always Visible */}
      {/* <div className="mt-6 w-full max-w-lg">
        {timelineStages.map((stage, index) => (
          <div key={index} className={`p-4 mb-4 rounded-lg transition-all ${currentStage === index ? "bg-blue-600" : "bg-gray-800"}`}>
            <h3 className="text-lg font-semibold">{stage.subtitle}</h3>
            <p className="text-gray-300">{stage.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
