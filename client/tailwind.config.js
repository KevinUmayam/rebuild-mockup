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
        '1160': '1160px',
        '1024': '1024px',
        '600': '600px',
        '560': '560px',
        '480': '480px',
        '460': '460px',
        '260': '260px',
        '250': '250px',
        '240': '240px',
        '230': '230px',
        '220': '220px',
        '120': '120px',
        '80': '80px',
        '60': '60px',
        '50': '50px',
        '30': '30px',
        '10px': '10px',
      },
      fontSize: {
        '30': '30px', // Custom font 
        '25': '25px', // Custom font size
      },
      gridTemplateColumns: {

        // Complex site-specific column configuration
        'recibir': 'repeat(4, 270px) 80px',
      },
    },
  },
  plugins: [],
}

