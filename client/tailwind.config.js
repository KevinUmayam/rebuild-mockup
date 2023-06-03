/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // colores custom abajo
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
        '250': '250px',
        '230': '230px',
        '50': '50px',
        '30': '30px',
        '10px': '10px',
      },
    },
  },
  plugins: [],
}

