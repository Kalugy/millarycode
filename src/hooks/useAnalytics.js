// src/hooks/useAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-FPP4GNNH9Q', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default useAnalytics;
