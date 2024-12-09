import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSelector = () => {
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
export default ThemeSelector

export const ThemeSelectorButtons = () => {
  const { switchTheme, theme } = useTheme();
  const buttonStyles = {
    default: "bg-defaultBg text-defaultText",
    dark: "bg-darkBg text-darkText",
    blue: "bg-blueBg text-blueText",
    green: "bg-greenBg text-greenText",
  };

  const themeButtons = [
    { name: "A", theme: "default" },
    { name: "A", theme: "dark" },
    { name: "A", theme: "blue" },
    { name: "A", theme: "green" },
  ];

  return (
    <div className='flex gap-2'>
          {themeButtons.map((button) => (
            <button
              key={button.theme}
              onClick={() => switchTheme(button.theme)}
              className={`px-3 py-1 rounded transition duration-300 transform ${
                theme === button.theme
                  ? "scale-105 border-2 border-blue-500 shadow-lg"
                  : "opacity-75 hover:opacity-100"
              } ${buttonStyles[button.theme]}`}
            >
              {button.name}
            </button>
          ))}
    </div>
  );
};
