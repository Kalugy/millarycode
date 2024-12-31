/** @type {import('tailwindcss').Config} */

const themes = ['default', 'dark', 'blue', 'green'];


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    ...themes.map((theme) => `theme-${theme}`), // Adds theme classes
    ...themes.map((theme) => `button-${theme}`), // Adds button theme classes
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'], // Add your custom font
      },
      colors: {
        // Add bg colors for each theme
        defaultBg: '#ffffff',
        darkBg: '#333333',
        blueBg: '#e0f7fa',
        greenBg: '#e8f5e9',
        // Add hover colors for each theme
        defaultHoverBg: '#A0A0A0',
        darkHoverBg: '#888888',
        blueHoverBg: '#81D0D8',
        greenHoverBg: '#A0D1B1',
        // Add text colors for each theme
        defaultText: '#000000',
        darkText: '#ffffff',
        blueText: '#006064',
        greenText: '#1b5e20',
        //background Divs
        defaultCustomBg: '#EDEDED',
        darkCustomBg: '#78716c', //custom div bg background
        blueCustomBg: '#B3E3F0',
        greenCustomBg: '#86C1A2',
      },
    },
  },
  plugins: [],
}
