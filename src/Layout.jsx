import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { useTheme } from './components/Theme/ThemeContext';
import useAnalytics from './hooks/useAnalytics';

export default function Layout() {
  useAnalytics(); // Initialize Google Analytics

  const { theme } = useTheme() 

  return (
    <div className={`theme-${theme}`}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* Dynamic content goes here */}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
