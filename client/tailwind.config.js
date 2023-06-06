/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // custom sizes abajo
  theme: {
    extend: {
      colors: {

        'custom-gray': '#484848',
        'custom-green': '#006C45',
        'custom-light-gray': '#C4C4C4',
      },
      spacing: {
        '1180': '1180px',
        '1024': '1024px',
        '480': '480px',
        '250': '250px',
        '240': '240px',
        '230': '230px',
        '60': '60px',
        '50': '50px',
        '30': '30px',
        '10px': '10px',
      },
      fontSize: {
        '30': '30px', // Custom font size
      },
    },
  },
  plugins: [],
}

