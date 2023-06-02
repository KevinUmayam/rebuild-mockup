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
    },
  },
  plugins: [],
}

