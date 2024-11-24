import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dragPos, setDragPos] = useState({ x: window.innerWidth - 70, y: 20 }); // Start at top-right
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Check initial screen size

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (!isDragging) {
      setMenuOpen((prev) => !prev);
    }
  };

  const handleDragStart = (e) => {
    if (isDesktop) return; // Disable dragging on desktop

    setIsDragging(true);

    const startX = e.clientX || e.touches[0].clientX;
    const startY = e.clientY || e.touches[0].clientY;

    const initialX = dragPos.x;
    const initialY = dragPos.y;

    const handleMouseMove = (moveEvent) => {
      const moveX = moveEvent.clientX || moveEvent.touches[0].clientX;
      const moveY = moveEvent.clientY || moveEvent.touches[0].clientY;

      const offsetX = moveX - startX;
      const offsetY = moveY - startY;

      setDragPos({
        x: Math.min(Math.max(0, initialX + offsetX), window.innerWidth - 60), // Keep within horizontal bounds
        y: Math.min(Math.max(0, initialY + offsetY), window.innerHeight - 60), // Keep within vertical bounds
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
  };

  return (
    <div className="overflow-hidden">
      {/* Draggable/Open Button */}
      <div
        className="fixed top-4 z-40 right-8 w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
        style={{
          left: dragPos.x + 'px',
          top: dragPos.y + 'px',
          touchAction: 'none',
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onClick={toggleMenu}
      >
        ☰
      </div>

      {/* Sidebar/Menu */}
      <div
        className={`fixed top-0 ${
          isDesktop ? 'right-0 w-72' : 'inset-0 w-full'
        } h-full bg-gray-900 text-white shadow-lg z-40 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col">
          <button
            onClick={toggleMenu}
            className="self-end p-2 bg-gray-700 rounded text-sm"
          >
            Close
          </button>
          <nav className="mt-8 space-y-4" onClick={toggleMenu}>
            <a href="#home" className="block text-lg hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="block text-lg hover:text-gray-400">
              About
            </a>
            <a href="#features" className="block text-lg hover:text-gray-400">
              Features
            </a>
            <a href="#faq" className="block text-lg hover:text-gray-400">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
