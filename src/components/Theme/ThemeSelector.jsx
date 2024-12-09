import React from 'react';
import { useTheme } from './ThemeContext';

export const ThemeSelector = () => {
  const { switchTheme, theme } = useTheme();

  return (
    <div className="flex gap-4 p-4 justify-center">

      <button onClick={() => switchTheme('default')} className={`button-base button-${theme} mt-6`}>
        Default
      </button>
      <button onClick={() => switchTheme('dark')} className={`button-base button-${theme} mt-6`}>
        Dark
      </button>
      <button onClick={() => switchTheme('blue')} className={`button-base button-${theme} mt-6`}>
        Blue
      </button>
      <button onClick={() => switchTheme('green')} className={`button-base button-${theme} mt-6`}>
        Green
      </button>
    </div>
  );
};
