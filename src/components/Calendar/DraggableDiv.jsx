// File: src/components/DraggableDiv.jsx
import React, { useState } from "react";

const DraggableDiv = () => {
  // State to track the position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Function to handle the start of the drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // Function to handle the dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - 50, // Adjusting for center alignment
      y: e.clientY - 50, // Adjusting for center alignment
    });
  };

  // Function to stop the dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach event listeners for dragging
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="w-24 h-24 bg-blue-500 rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    ></div>
  );
};

export default DraggableDiv;
