import React, { useState } from 'react';
import ThreeDCalendar from './ThreeDCalendar';
import FaArrowsAlt from '../../assets/icons/IdeaIcon'; // Import an icon from react-icons


const Description = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleIconClick = () => {
      setTooltipVisible(!tooltipVisible);
    };
    const [animationStopped, setAnimationStopped] = useState(true);

    const handleMouseEnter = () => {
        setAnimationStopped(true); // Stop animation on hover
    };

    return (
      <div className="p-6 ml-8 flex flex-col gap-5 items-start sm:flex-1 md:w-2/3 lg:w-1/2 xl:w-1/3 text-white">
       <h1 className=" flex gap-4 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Control of Your Time
      <div
         className={`hidden sm:inline-flex items-center relative group ${
            animationStopped ? '' : 'ring-animation'
        } `}
        onMouseEnter={handleMouseEnter}
      >
        {/* Icons */}
        <FaArrowsAlt className="text-gray-600 cursor-pointer text-2xl hover:text-gray-800" />
       

        {/* Tooltip */}
        <span className=" -left-8 top-9 opacity-0 group-hover:opacity-100 text-gray-800 text-sm font-semibold bg-white p-1 rounded shadow-lg transition-opacity duration-300 w-max sm:w-auto">
          Drag Calendar
        </span>
      </div>
    </h1>
        <p className="text-sm sm:text-base md:text-lg mb-4">
          This calendar view highlights the current month, helping you track and manage your events effortlessly. 
          You're in charge of your time, with dynamic updates and easy tracking features at your fingertips. 
        </p>
      </div>
    );
  };



const CalendarPage = () => {
  return (
    <div className="moving-gradient h-screen overflow-hidden">
    <div className="flex flex-col md:flex-row w-full h-full ">
      {/* Left side with text and description */}
      <Description />

      {/* Right side with the 3D calendar */}
      <div className="flex-1 h-96 md:h-full bg-opacity-30">
        <ThreeDCalendar />
      </div>
    </div>
    </div>

  );
};

export default CalendarPage;
