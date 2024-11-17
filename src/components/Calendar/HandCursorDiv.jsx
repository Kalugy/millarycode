// src/components/GrabAnimation.js
import React, { useState } from 'react';

const GrabAnimation = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Function to handle mouse and touch start events
  const handleStart = () => {
    setIsGrabbing(true);
  };

  // Function to handle mouse and touch end events
  const handleEnd = () => {
    setIsGrabbing(false);
  };

  return (
    <div
      className={`w-64 h-64 flex items-center justify-center rounded-md ${
        isGrabbing ? 'bg-gray-800 cursor-grabbing' : 'bg-black cursor-grab'
      } transition-all duration-300`}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd} // Reset on mouse leave
      onTouchStart={handleStart} // Mobile: Handle touch start
      onTouchEnd={handleEnd} // Mobile: Handle touch end
    >
      <p className="text-white">Grab Me!</p>
    </div>
  );
};

export default GrabAnimation;
