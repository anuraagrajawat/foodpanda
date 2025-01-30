/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        swiggyOrange: '#FF7F00', // Swiggy orange
        swiggyYellow: '#FFCB2D', // Swiggy yellow
      },
      backgroundImage: {
        'swiggy-gradient': 'linear-gradient(to right, #FF7F00, #FFCB2D)', // Swiggy gradient
      },
    },
  },
  plugins: [],
};
