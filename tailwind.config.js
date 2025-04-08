/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'], // Replace Exo with Montserrat
      },
    },
  },
  plugins: [],
}
