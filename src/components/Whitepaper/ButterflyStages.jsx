import React, { useState, useEffect } from 'react';
import { useTheme } from '../Theme/ThemeContext';

const ButterflyStages = () => {
  const { theme } = useTheme()

  const bgClasses = {
    default: 'bg-defaultCustomBg',
    dark: 'bg-darkCustomBg', // Updated for dark theme
    blue: 'bg-blueCustomBg',
    green: 'bg-greenCustomBg',
  };

  const butterflyStages = [
    {
      stage: 'Egg',
      description:
        'The egg symbolizes the beginning of a journey. In human life, this is when we set our goals and dreams, laying the foundation for growth.',
      icon: 'https://via.placeholder.com/100?text=Egg',
    },
    {
      stage: 'Caterpillar',
      description:
        'The caterpillar represents hard work and learning. This is the stage where we acquire knowledge and build habits to move closer to our goals.',
      icon: 'https://via.placeholder.com/100?text=Caterpillar',
    },
    {
      stage: 'Chrysalis',
      description:
        'The chrysalis stage symbolizes transformation. It’s a period of self-reflection, resilience, and internal growth before achieving breakthroughs.',
      icon: 'https://via.placeholder.com/100?text=Chrysalis',
    },
    {
      stage: 'Butterfly',
      description:
        'The butterfly represents achievement and freedom. This is when you become the best version of yourself, soaring toward new goals.',
      icon: 'https://via.placeholder.com/100?text=Butterfly',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change stage every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % butterflyStages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handler for clicking on a dot
  const goToStage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative w-full max-w-md overflow-hidden">
        <div
          className="flex transition-transform duration-500 rounded"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {butterflyStages.map((stage, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 flex flex-col items-center text-center p-6 ${bgClasses[theme]} shadow-lg rounded-lg`}
            >
              <img
                src={`/images/stage${index+1}.png`}
                alt={`icon`}
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{stage.stage}</h3>
              <p className="font-light text-sm md:text-base">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex space-x-2 mt-4">
        {butterflyStages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStage(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? `${bgClasses[theme]}`
                : 'bg-gray-300 hover:bg-gray-400'
            } transition-colors`}
            aria-label={`Go to ${index + 1} stage`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ButterflyStages;
