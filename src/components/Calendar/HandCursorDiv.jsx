// src/components/GrabAnimation.js
import React, { useState, useEffect } from 'react';

const GrabAnimation = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect if the user is on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // Basic check for common mobile user agents
      if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
        setIsMobile(true);
      }
    };

    checkIfMobile();
  }, []);

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
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
    >
      <p className="text-white">Grab Me!</p>
      {isMobile && (
        <p className="text-xs text-gray-400 mt-2">Touch and hold to interact</p>
      )}
    </div>
  );
};

export default GrabAnimation;
